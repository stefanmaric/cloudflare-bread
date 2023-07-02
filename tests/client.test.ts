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

describe('Dynamic accessors', () => {
  it.concurrent('It creates new wrappers that can be chained', async ({ expect }) => {
    const client = createClient({ token: 'SUPER_SECRET' })
    const user = client.user
    expect(user).toBeTruthy()
    const billing = user.billing
    expect(billing).toBeTruthy()
    const history = billing.history
    expect(history).toBeTruthy()
  })
  it.concurrent('It creates new wrappers from parameterized segments', async ({ expect }) => {
    const client = createClient({ token: 'SUPER_SECRET' })
    const accounts = client.accounts.accountIdentifier('FAKE_ACCOUNT')
    expect(accounts).toBeTruthy()
    const billing = accounts.billing
    expect(billing).toBeTruthy()
    const profile = billing.profile
    expect(profile).toBeTruthy()
  })
  it.concurrent('Accessors work with object destructing', async ({ expect }) => {
    const client = createClient({ token: 'SUPER_SECRET' })
    const workers = client.accounts.accountIdentifier('FAKE_ACCOUNT').workers
    const { domains, scripts, deployments } = workers
    expect(domains).toBeTruthy()
    expect(scripts).toBeTruthy()
    expect(deployments).toBeTruthy()
  })
})
