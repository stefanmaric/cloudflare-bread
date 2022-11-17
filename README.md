# cloudflare-bread

JavaScript fetch API client for Cloudflare's API with TypeScript definitions generated from the new Cloudflare's OpenAPI schema.

## Project status

Pre-alpha

## Usage

Install with your package manager of choice:

```shell
npm install cloudflare-bread

# or...

yarn add cloudflare-bread

# or...

pnpm install cloudflare-bread
```

Use the API and get type definitions:

```typescript
import { CloudflareBread } from 'cloudflare-bread'

const cfClient = new CloudflareBread({
  TOKEN: () => process.env.CF_TOKEN,
})

const response = await cfClient.workersKvNamespace.workersKvNamespaceCreateANamespace({
  accountIdentifier: '<your CF account ID>',
  requestBody: {
    title: 'MY_KV_DATABASE'
  }
})

console.log(response.result)
```

## The OpenAPI Schema and generated files

At this point in time, Cloudflare's OpenAPI schema file has a few issues so I had to include it in the repo to apply modifications, some examples:

* `organization` references pointing to external schemas
* Many object definitions missing the `"type": "object"` declaration

On a similar note, `openapi-typescript-codegen` has troubles in a few areas so I had to check-in the generated files as well to apply manual fixes, among them:

* Gets confused about the `object` type of DurableObjects, exports an `any` model. Rename to `_object` and fix imports
* Even tho it generates the `_class.ts` model for Cloudflare's account class type, imports are broken. Fix them.
* Generates duplicated re-exports. Delete duplicated.
* `Host` vs `host` models confuses TypeScript even when `forceConsistentCasingInFileNames` is set to `false` in the `tsconfig.json`. Add `@ts-ignore`

I plan on notifying about these issues to both, Cloudflare and `openapi-typescript-codegen` so these files can be eventually removed from the repo.

## License

MIT, see [LICENSE](./LICENSE)
