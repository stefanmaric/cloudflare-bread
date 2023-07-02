import type { paths as CloudflarePaths } from '../types/cloudflare'

import { ClientOptions, Wrapper, _createClient } from './bread'

/**
 * Create a Cloudflare API v4 client.
 *
 * It exposes endpoints as builder API with types.
 *
 * @example
 *
 * const client = createClient({ token: process.env.CLOUDFLARE_API_TOKEN })
 *
 * // Get records for a given zone.
 * // https://developers.cloudflare.com/api/operations/dns-records-for-a-zone-list-dns-records
 *
 * const client = createClient({ token: process.env.CLOUDFLARE_API_TOKEN })
 *
 * const response = await client.zones.zoneIdentifier('example.com').dns_records.$get({
 *   searchParams: {
 *     type: 'CNAME'
 *   }
 * })
 *
 * if (response.status === 200) {
 *   const results = await response.json()
 *   //    ^? this will be typed
 * }
 *
 */
export const createClient = (
  options: Partial<ClientOptions> & { token: string },
): Wrapper<CloudflarePaths> => {
  const { token, middleware, ...context } = options

  return _createClient<CloudflarePaths>({
    baseUrl: 'https://api.cloudflare.com/client/v4',
    middleware: (url, init) => {
      init.headers = new Headers(init.headers)
      init.headers.set('Authorization', `Bearer ${token}`)
      return middleware ? middleware(url, init) : [url, init]
    },
    ...context,
  })
}

const init = async () => {
  const token = process.env.CLOUDFLARE_API_TOKEN as string
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID as string

  const client = createClient({
    token,
  })

  const account = client.accounts.accountIdentifier(accountId)
  const { scripts, domains } = account.workers
  const scrpts = await (await scripts.$get()).json()
  console.log(scrpts)
  const dmns = await (await domains.$get()).json()
  console.log(dmns)

  const user = await (await client.user.$get({})).json()

  const hue = await client.radar.dns.top.ases.$get({
    searchParams: {
      domain: ['hue.com'],
    },
  })

  console.log(user)
}

init().then(console.log).catch(console.error)
