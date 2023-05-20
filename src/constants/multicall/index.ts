import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.BSCTESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A',
  [ChainId.PULSE]: '0xdc6ed7C2EE5ab7fd303334B34F7524Cbb463DE57'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
