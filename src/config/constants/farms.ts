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
    tokenSymbol: 'YUZU',
    tokenAddresses: {
      97: '',
      2000: '0xa98fa09D0BED62A9e0Fb2E58635b7C9274160dc7',
    },
    quoteTokenSymbol: QuoteToken.DOGE,
    quoteTokenAdresses: contracts.wada,
  },
  {
    pid: 2,
    lpSymbol: 'DOGESHREK-DOGE',
    lpAddresses: {
      97: '',
      2000: '0x0629C3E894D63084c8feaAB8c738Faf38aA0563b', // WADA-USDC Bourbon-LP
    },
    tokenSymbol: 'DOGESHREK',
    tokenAddresses: {
      97: '',
      2000: '0x2BE0096B24343549E34224aa9aa297E99961023D',
    },
    quoteTokenSymbol: QuoteToken.DOGE,
    quoteTokenAdresses: contracts.wada,
  },
  {
    pid: 3,
    lpSymbol: 'OMNOM-DOGE',
    lpAddresses: {
      97: '',
      2000: '0x3fC0A08974D7f6a22a0f8D63eD60B4D935b53F5A', // WADA-USDC Bourbon-LP
    },
    tokenSymbol: 'OMNOM',
    tokenAddresses: {
      97: '',
      2000: '0xe3fcA919883950c5cD468156392a6477Ff5d18de',
    },
    quoteTokenSymbol: QuoteToken.DOGE,
    quoteTokenAdresses: contracts.wada,
  },
  {
    pid: 4,
    lpSymbol: 'DOGEBURN-DOGE',
    lpAddresses: {
      97: '',
      2000: '0x65464190C1585A707A14360eeeD25B8211a56225', // WADA-USDC Bourbon-LP
    },
    tokenSymbol: 'DOGEBURN',
    tokenAddresses: {
      97: '',
      2000: '0xeE1DaaED7E25cD40AeaF7E45a51e1F4b2e28A993',
    },
    quoteTokenSymbol: QuoteToken.DOGE,
    quoteTokenAdresses: contracts.wada,
  },

]

export default farms