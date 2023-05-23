import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.bunnyswap.xyz/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.bunnyswap.xyz/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://www.bunnyswap.xyz/nests'
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://www.bunnyswap.xyz/ifo'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [      
      {
        label: 'DexScreener',
        href: 'https://dexscreener.com/pulsechain/0x9cdee06ab35c0b283fa47230c94007aadb3a552b',
      }
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/bunnyswapxyz/",
      }
    ],
  },
]

export default config
