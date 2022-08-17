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
    tokenSymbol: 'BOURBON',
    tokenAddresses: {
      97: '',
      2000: '0x44aA2dfe660439E9a93483EC665Bf20dE62CEc2B',
    },
    quoteTokenSymbol: QuoteToken.ADA,
    quoteTokenAdresses: contracts.wada,
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
    quoteTokenSymbol: QuoteToken.ADA,
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
    quoteTokenSymbol: QuoteToken.ADA,
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
    quoteTokenSymbol: QuoteToken.ADA,
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
    quoteTokenSymbol: QuoteToken.ADA,
    quoteTokenAdresses: contracts.wada,
  },
  {
    pid: 5,
    lpSymbol: 'FOGE-DOGE',
    lpAddresses: {
      97: '',
      2000: '0xca59606b0e6de96A550f8fc4BBD394b68Ef8225A', // WADA-USDC Bourbon-LP
    },
    tokenSymbol: 'FOGE',
    tokenAddresses: {
      97: '',
      2000: '0xc2DD4557Ad5b9b481AFc3f9B1Db3D8A5Ce60Dace',
    },
    quoteTokenSymbol: QuoteToken.ADA,
    quoteTokenAdresses: contracts.wada,
  },
  {
    pid: 7,
    lpSymbol: 'USDT-DOGE',
    lpAddresses: {
      97: '',
      2000: '0x4F8401E18f460DDE7DA568519835cb2Ae35F9163', // WADA-USDC Bourbon-LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      2000: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
    },
    quoteTokenSymbol: QuoteToken.ADA,
    quoteTokenAdresses: contracts.wada,
  },
  {
    pid: 6,
    lpSymbol: 'BOURBON-USDT',
    lpAddresses: {
      97: '',
      2000: '0xEbf9Fc1AFeB9dbc08Fb50F900B50c75277d1a2fd', // WADA-USDC Bourbon-LP
    },
    tokenSymbol: 'BOURBON',
    tokenAddresses: {
      97: '',
      2000: '0x44aA2dfe660439E9a93483EC665Bf20dE62CEc2B',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 8,
    lpSymbol: 'USDC-DOGE',
    lpAddresses: {
      97: '',
      2000: '0x38e333d477f64a7d2dBDBC0B8902671A9684a10b', // WADA-USDC Bourbon-LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      2000: '0x765277EebeCA2e31912C9946eAe1021199B39C61',
    },
    quoteTokenSymbol: QuoteToken.ADA,
    quoteTokenAdresses: contracts.wada,
  },
  {
    pid: 9,
    lpSymbol: 'BOURBON-USDC',
    lpAddresses: {
      97: '',
      2000: '0x78c2CBdf7AfDF2159A46FBFfb6c31AcAc8bAF930', // BOURBON-USDC Bourbon-LP
    },
    tokenSymbol: 'BOURBON',
    tokenAddresses: {
      97: '',
      2000: '0x44aA2dfe660439E9a93483EC665Bf20dE62CEc2B',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 10,
    lpSymbol: 'USDT-USDC',
    lpAddresses: {
      97: '',
      2000: '0x61ab7A11728d0129B1c2E2028f9404DC99ff7D61', // BOURBON-USDC Bourbon-LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      2000: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 11,
    lpSymbol: 'YODE-DOGE',
    lpAddresses: {
      97: '',
      2000: '0xea684E368bE5871A624baa09a891fd7bf93Ad673', // BOURBON-USDC Bourbon-LP
    },
    tokenSymbol: 'YODE',
    tokenAddresses: {
      97: '',
      2000: '0x6FC4563460d5f45932C473334d5c1C5B4aEA0E01',
    },
    quoteTokenSymbol: QuoteToken.ADA,
    quoteTokenAdresses: contracts.wada,
  },
  {
    pid: 12,
    lpSymbol: 'ETH-DOGE',
    lpAddresses: {
      97: '',
      2000: '0x6F5E8b72842Ff33aD6C8c7B6a11d263234EeB921', // BOURBON-USDC Bourbon-LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      2000: '0xB44a9B6905aF7c801311e8F4E76932ee959c663C',
    },
    quoteTokenSymbol: QuoteToken.ADA,
    quoteTokenAdresses: contracts.wada,
  },
]

export default farms