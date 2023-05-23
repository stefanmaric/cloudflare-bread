import type { CamelCase } from 'type-fest'

const METHODS = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'] as const

type HttpMethod = (typeof METHODS)[number]

type OperationObject = {
  parameters?: {}
  requestBody?: {}
  responses?: {}
}

type PathItemObject = { [M in HttpMethod]?: OperationObject }

/**
 * A segment in a pathname that corresponds to an URL path param as defined by OpenAPI
 */
type PathParam = `{${string}}`

/**
 * Given a pathname, get the first segment.
 *
 * @example
 *
 * type first = NextSegment<'/accounts/{account_id}/users/{user_id}'>
 * //   ^? type first = "accounts"
 *
 * type relative = NextSegment<'accounts/{account_id}/users/{user_id}'>
 * //   ^? type relative = "accounts"
 *
 * type single = NextSegment<'/accounts'>
 * //   ^? type single = "accounts"
 *
 * type trailing = NextSegment<'/accounts/'>
 * //   ^? type trailing = "accounts"
 *
 * type empty = NextSegment<'/'>
 * //   ^? type empty = never
 */
type NextSegment<Pathname extends string> = Pathname extends ''
  ? never
  : Pathname extends `/${infer Rest}`
  ? NextSegment<Rest>
  : Pathname extends `${infer Before}/${string}`
  ? Before
  : Pathname

/**
 * Given a map of paths, get an union of all the first segment of all paths.
 *
 * @example
 *
 * type options = NextSegments<{ '/a': {}; '/a/b': {}; '/{a}/c': {}; '/{a}': {}; '/d/e': {} }>
 * //   ^? type options = "a" | "{a}" | "d"
 */
type NextSegments<T extends {}> = NextSegment<Extract<keyof T, string>>

/**
 * Given a union of paths, select the keys that start with the specified Prefix segment.
 *
 * @example
 *
 * type paths = { '/a': {}; '/a/b': {}; '/{a}/c': {}; '/{a}': {}; '/d/e': {} }
 *
 * type simple = FilterPaths<paths, 'a'>
 * //   ^? type simple = "/a" | "/a/b"
 *
 * type withVars = FilterPaths<paths, PathParam>
 * //   ^? type withVars = "/{a}/c" | "/{a}"
 */
type FilterPaths<Paths extends {}, Prefix extends string> = Extract<
  keyof Paths,
  `/${Prefix}/${string}` | `/${Prefix}`
>

/**
 * Given a pathname, remove the first segment.
 *
 * @example
 *
 * type trimmed = RemoveFirstSegment<'/accounts/{account_id}/users/{user_id}'>
 * //   ^? "/${account_id}/users/{user_id}"
 */
type RemoveFirstSegment<Pathname extends string> = Pathname extends `/${string}/${infer Rest}`
  ? `/${Rest}`
  : never

/**
 * Given a map of paths, select those with Prefix as the first segment.
 *
 * @example
 *
 * type paths = { '/a': {}; '/a/b': {}; '/{a}/c': {}; '/{a}': {}; '/d/e': {} }
 *
 * type selected1 = PickPaths<paths, 'a'>
 * //   ^? type selected1 = { "a": {}; "/a/b": {}; }
 *
 * type selected2 = PickPaths<paths, 'd'>
 * //   ^? type selected2 = { "/d/e": {}; }
 */
type PickPaths<Paths extends {}, Prefix extends string> = {
  [K in FilterPaths<Paths, Prefix>]: Paths[K]
}

/**
 * Given a map of paths, remove the first segment for every pathname key.
 *
 * Note that it doesn't do any kind of filtering, it will remove the first
 * segment of every path-like key.
 *
 * Single segment paths are removed from the map.
 *
 * @example
 *
 * type clipped = ClipKeys<{ '/a/b': {}; '/c/d': {}; '/e': {}; '/e/f/g': {} }>
 * //   ^? type clipped = { "/b": {}; "/d": {}; "/f/g": {} }
 */
type ClipKeys<Paths extends {}> = {
  [K in keyof Paths as RemoveFirstSegment<Extract<K, string>>]: Paths[K]
}

/**
 * Given a map of paths, select the pathname keys that start with the Prefix segment and remove that
 * segment from every selected pathname key.
 *
 * @example
 *
 * type selection = PickAndClip<{ '/a/b': {}; '/c/d': {}; '/e': {}; '/e/f/g': {} }, 'e'>
 * //   ^? type selection = { "/f/g": {}; }
 */
type PickAndClip<Paths extends {}, Prefix extends string> = ClipKeys<PickPaths<Paths, Prefix>>

/**
 * Given a map of paths, pick, clip, and wrap each of its values.
 */
type PickAndWrap<Paths extends {}, Prefix extends string> = Wrapper<PickAndClip<Paths, Prefix>>

/**
 * Customize the arguments of a fetch call based on the parameters defined in the OpenAPI schema.
 */
type DecoratedFetcherArgs<T extends PathItemObject[HttpMethod]> = T extends
  | {
      parameters: { query: {} }
    }
  | { parameters: { header: {} } }
  ? [
      Omit<RequestInit, 'method'> &
        (T extends { parameters: { query: {} } }
          ? { searchParams: T['parameters']['query'] }
          : {}) &
        (T extends { parameters: { header: {} } } ? { headers: T['parameters']['header'] } : {})
    ]
  : [Omit<RequestInit, 'method'>] | []

/**
 * Take an Operation response set Response API and convert it in a union of Response objects with
 * specific status code and typed .json() methods.
 */
type MappedResponse<T> = T extends Record<string, { content: Record<string, unknown> }>
  ? {
      [K in keyof T]: {
        status: K
        json: () => Promise<T[K]['content'][keyof T[K]['content']]>
      }
    }[keyof T] &
      Omit<Response, 'status' | 'json'>
  : Response

/**
 * Take all the possible responses for a given Operation, pick JSON content responses and decorate
 * them.
 */
type DecoratedResponse<T extends PathItemObject[HttpMethod]> = T extends {
  responses: Record<string, { content: { [C in `${string}json${string}`]: {} } }>
}
  ? Promise<MappedResponse<T['responses']>>
  : Promise<Response>

/**
 * Produce a fetch()-like method signature for a given
 */
type Fetcher<T extends PathItemObject[HttpMethod]> = (
  ...args: [...DecoratedFetcherArgs<T>]
) => DecoratedResponse<T>

/**
 * Take an Operation set and map it to fetcher methods.
 */
type FetchOperations<Item extends PathItemObject> = {
  [K in keyof Item as `$${Extract<K, string>}`]: Item[K] extends {} ? Fetcher<Item[K]> : never
}

/**
 * Take a PathParam string and strip out the braces.
 *
 * @example
 *
 * type cleared = ClearBraces<'{user_id}'>
 * //   ^? type cleared = "user_id"
 */
type ClearBraces<T extends string> = T extends `{${infer Rest}`
  ? ClearBraces<Rest>
  : T extends `${infer Rest}}`
  ? ClearBraces<Rest>
  : T

/**
 * Convert a PathParam into a camelCase name.
 *
 * @example
 *
 * type pretty = RenameParam<'{repo_owner_identifier}'>
 * //   ^? type pretty = "repoOwnerIdentifier"
 */
type RenameParam<T extends string> = T extends PathParam ? CamelCase<ClearBraces<T>> : T


type Accessor<Paths extends {}, Prefix extends string> = Paths extends Record<
  `/${Prefix}/${string}`,
  PathItemObject
>
  ? `/${Prefix}` extends keyof Paths
    ? PickAndWrap<Paths, Prefix> & FetchOperations<Paths[`/${Prefix}`]>
    : PickAndWrap<Paths, Prefix>
  : Paths extends Record<`/${Prefix}`, PathItemObject>
  ? FetchOperations<Paths[`/${Prefix}`]>
  : never

export type Wrapper<Paths extends {}> = {
  [K in NextSegments<Paths> as RenameParam<K>]: K extends PathParam
    ? (value: string) => Accessor<Paths, K>
    : Accessor<Paths, K>
}

export type ClientOptions = {
  middleware?: (url: URL, init: RequestInit) => Promise<[URL, RequestInit]> | [URL, RequestInit]
  baseUrl: string
}

type ClientContext = Required<ClientOptions> & {
  [ClientState]: string[]
}

const ClientState = Symbol('ClientState')

const wrapper = (context: ClientContext): {} => {
  const next: ClientContext = { ...context, [ClientState]: [...context[ClientState]] }

  return new Proxy(
    function (param: string) {
      next[ClientState].pop()
      next[ClientState].push(param)
      return wrapper(next)
    },
    {
      get(target, prop) {
        if (typeof prop !== 'string') return target[prop as keyof typeof target]

        if (METHODS.some((method) => `$${method}` === prop)) {
          const method = prop.slice(1).toUpperCase()
          const baseUrl = new URL(next.baseUrl)
          baseUrl.pathname = `${baseUrl.pathname.replace(/\/$/, '')}/${next[ClientState].join('/')}`

          return async (init?: RequestInit & { searchParams?: Record<string, string> }) => {
            const { searchParams, ...fetchOptions } = init ?? {}
            const fullUrl = new URL(baseUrl)

            if (searchParams) {
              fullUrl.search = new URLSearchParams(searchParams).toString()
            }

            return fetch(...(await next.middleware(fullUrl, { ...fetchOptions, method })))
          }
        }

        next[ClientState].push(prop)
        return wrapper(next)
      },
    }
  )
}

// The Pick<X, keyof X> is a hack to make the wrapper work with interfaces (vs type aliases)
export const _createClient = <Paths extends {}>(
  options: ClientOptions
): Wrapper<Pick<Paths, keyof Paths>> => {
  return wrapper({
    middleware: (url, init) => [url, init],
    ...options,
    [ClientState]: [],
  }) as unknown as Wrapper<Paths>
}
