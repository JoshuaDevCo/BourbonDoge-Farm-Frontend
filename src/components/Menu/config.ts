import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Exchange',
        href: 'https://doge.bourbondefi.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://doge.bourbondefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Docs',
    icon: 'InfoIcon',
    href: 'https://bourbondefi.gitbook.io/bourbon-finance/',
  },
  {
    label: 'Telegram',
    icon: 'TelegramIcon',
    href: 'https://t.me/BourbonDAO',
  },
  {
    label: 'Doge Miner',
    icon: 'FarmIcon',
    href: 'https://dogeminer.bourbondefi.com/',
  },
]

export default config
