# cloudflare-bread

JavaScript fetch API client for Cloudflare's API with TypeScript definitions generated automatically from the new [Cloudflare's OpenAPI schema](https://developers.cloudflare.com/api/).

## Project status

Alpha: being used in certain non-critical applications

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
import { createClient } from 'cloudflare-bread'

const client = createClient({ token: process.env.CLOUDFLARE_API_TOKEN })

const response = await client.zones.zoneIdentifier('example.com').dns_records.$get({
  searchParams: {
    type: 'CNAME'
  }
})

if (response.status === 200) {
  const results = await response.json()
  //    ^? this will be typed
}
```

## TODO

- [ ] Collapse different params on the same position into a single one.
- [ ] Fix `searchParams` being required even tho none of the params are actually required
- [ ] Improve types of middleware

## License

MIT, see [LICENSE](./LICENSE)
