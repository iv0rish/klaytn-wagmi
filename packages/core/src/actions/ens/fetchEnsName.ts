import { Address } from 'abitype'

import { getProvider } from '../providers'

export type FetchEnsNameArgs = {
  /** Address to lookup */
  address: Address
  /** Chain id to use for provider */
  chainId?: number
}

export type FetchEnsNameResult = string | null

export async function fetchEnsName({
  address,
  chainId,
}: FetchEnsNameArgs): Promise<FetchEnsNameResult> {
  const provider = getProvider({ chainId })
  return provider.lookupAddress(address)
}
