import { ChainName } from './chains'

export type BlockExplorerName = 'etherscan'
export type BlockExplorer = { name: string; url: string }

type EtherscanChains = Extract<
  ChainName,
  | 'mainnet'
  | 'ropsten'
  | 'rinkeby'
  | 'goerli'
  | 'kovan'
  | 'sepolia'
  | 'optimism'
  | 'optimismKovan'
  | 'polygon'
  | 'polygonMumbai'
  | 'arbitrum'
  | 'arbitrumRinkeby'
  | 'arbitrumGoerli'
  | 'klaytn'
  | 'klaytnBaobab'
>
export const etherscanBlockExplorers: Record<EtherscanChains, BlockExplorer> = {
  mainnet: {
    name: 'Etherscan',
    url: 'https://etherscan.io',
  },
  ropsten: {
    name: 'Etherscan',
    url: 'https://ropsten.etherscan.io',
  },
  rinkeby: {
    name: 'Etherscan',
    url: 'https://rinkeby.etherscan.io',
  },
  goerli: {
    name: 'Etherscan',
    url: 'https://goerli.etherscan.io',
  },
  kovan: {
    name: 'Etherscan',
    url: 'https://kovan.etherscan.io',
  },
  sepolia: {
    name: 'Etherscan',
    url: 'https://sepolia.etherscan.io',
  },
  optimism: {
    name: 'Etherscan',
    url: 'https://optimistic.etherscan.io',
  },
  optimismKovan: {
    name: 'Etherscan',
    url: 'https://kovan-optimistic.etherscan.io',
  },
  polygon: {
    name: 'PolygonScan',
    url: 'https://polygonscan.com',
  },
  polygonMumbai: {
    name: 'PolygonScan',
    url: 'https://mumbai.polygonscan.com',
  },
  arbitrum: { name: 'Arbiscan', url: 'https://arbiscan.io' },
  arbitrumRinkeby: { name: 'Arbiscan', url: 'https://testnet.arbiscan.io' },
  arbitrumGoerli: { name: 'Arbiscan', url: 'https://goerli.arbiscan.io' },
  klaytn: {
    name: 'Klaytnfinder',
    url: 'https://www.klaytnfinder.io',
  },
  klaytnBaobab: {
    name: 'Klaytnfinder',
    url: 'https://www.klaytnfinder.io',
  },
} as const
