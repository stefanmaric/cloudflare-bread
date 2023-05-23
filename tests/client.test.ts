
import { describe, it } from 'vitest'
import { createClient } from '../src/client'

describe('Basic functionality', () => {
  it.concurrent('It can create an API client without breaking', async ({ expect }) => {
    const client = createClient({ token: 'SUPER_SECRET' })
    expect(client).toBeTruthy()
  })
  it.concurrent('Can access methods without breaking', async ({ expect }) => {
    const client = createClient({ token: 'SUPER_SECRET' })
    const account = client.accounts.accountIdentifier('FAKE_ACCOUNT')
    expect(account).toBeTruthy()
  })
})
