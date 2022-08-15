import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'BOURBON-DOGE',
    lpAddresses: {
      97: '',
      2000: '0x0d6e879bA684cCb95454c55998893F88dd6d0A02', // WADA-USDC Bourbon-LP
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '',
      2000: '0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 1,
    lpSymbol: 'YUZU-DOGE',
    lpAddresses: {
      97: '',
      2000: '0xcA1424b1d64FD6364E2717c9539106da50300c3A', // WADA-USDC Bourbon-LP
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '',
      2000: '0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101',
    },
    quoteTokenSymbol: QuoteToken.DOGE,
    quoteTokenAdresses: contracts.wada,
  },
  {
    pid: 2,
    lpSymbol: 'YUZU-DOGE',
    lpAddresses: {
      97: '',
      2000: '0x0629C3E894D63084c8feaAB8c738Faf38aA0563b', // WADA-USDC Bourbon-LP
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '',
      2000: '0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101',
    },
    quoteTokenSymbol: QuoteToken.DOGE,
    quoteTokenAdresses: contracts.wada,
  },
  {
    pid: 3,
    lpSymbol: 'YUZU-DOGE',
    lpAddresses: {
      97: '',
      2000: '0x3fC0A08974D7f6a22a0f8D63eD60B4D935b53F5A', // WADA-USDC Bourbon-LP
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '',
      2000: '0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101',
    },
    quoteTokenSymbol: QuoteToken.DOGE,
    quoteTokenAdresses: contracts.wada,
  },

]

export default farms