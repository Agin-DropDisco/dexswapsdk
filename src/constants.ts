import JSBI from 'jsbi'
import PERMISSIVE_MULTICALL_ABI from './abis/PermissiveMulticall.json'
import STAKING_REWARDS_FACTORY_ABI from './abis/staking-rewards-distribution-factory.json'
import STAKING_REWARDS_DISTRIBUTION_ABI from './abis/staking-rewards-distribution.json'
import TOKEN_REGISTRY_ABI from './abis/token-registry.json'
import {
  mainnet as coreMainnet,
  mantle_testnet as coreMantle_Testnet,
  mumbai as coreMumbai,
  hyperspace as coreHyperspace,
} from './abis/core.json'
import {
  mainnet as peripheryMainnet,
  mantle_testnet as peripheryMantle_Testnet,
  mumbai as peripheryMumbai,
  hyperspace as peripheryHyperspace,
} from './abis/router.json'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  MANTLE_TESTNET = 5001,
  MUMBAI = 80001,
  HYPERSPACE = 3141,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const FACTORY_ADDRESS: { [chainId: number]: string } = {
  [ChainId.MAINNET]: coreMainnet.factory,
  [ChainId.MANTLE_TESTNET]: coreMantle_Testnet.factory,
  [ChainId.MUMBAI]: coreMumbai.factory,
  [ChainId.HYPERSPACE]: coreHyperspace.factory,
}

export const ROUTER_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: peripheryMainnet.router,
  [ChainId.MANTLE_TESTNET]: peripheryMantle_Testnet.router,
  [ChainId.MUMBAI]: peripheryMumbai.router,
  [ChainId.HYPERSPACE]: peripheryHyperspace.router,
}

export const STAKING_REWARDS_FACTORY_ADDRESS: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000001234',
  [ChainId.MANTLE_TESTNET]: '0x0000000000000000000000000000000000001234',
  [ChainId.MUMBAI]: '0x0000000000000000000000000000000000001234',
  [ChainId.HYPERSPACE]: '0x0000000000000000000000000000000000001234',
}

export const TOKEN_REGISTRY_ADDRESS: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x93DB90445B76329e9ed96ECd74e76D8fbf2590d8',
  [ChainId.MANTLE_TESTNET]: '0x3e7C79EF335F55b2E57C80731a68cAB9dB280453',
  [ChainId.MUMBAI]: '0x63Aa6D1462165bDfb1b50415f5fe70Ded49E5d35',
  [ChainId.HYPERSPACE]: '0x0000000000000000000000000000000000001234',
}

export const DEXSWAP_TOKEN_LIST_ID: { [chainId: number]: number } = {
  [ChainId.MAINNET]: 1,
  [ChainId.MANTLE_TESTNET]: 1,
  [ChainId.MUMBAI]: 1,
  [ChainId.HYPERSPACE]: 1,

}

export const INIT_CODE_HASH = '0x5aa557757702c2f2d3c5491233e3faa010a4b66b16383d2025d5fe58dbb6704c'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _25 = JSBI.BigInt(25)
export const SECONDS_IN_YEAR = JSBI.BigInt(31536000)
export const _30 = JSBI.BigInt(30)
export const _100 = JSBI.BigInt(100)
export const _1000 = JSBI.BigInt(1000)
export const _10000 = JSBI.BigInt(10000)

export const defaultSwapFee = _25
export const defaultProtocolFeeDenominator = FIVE

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

const PERMISSIVE_MULTICALL_ADDRESS: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x0946f567d0ed891e6566c1da8e5093517f43571d',
  [ChainId.MANTLE_TESTNET]: '0xA8fD29EbbfbC21bc274FedE5Aa5C5D3cedc43f2C',
  [ChainId.MUMBAI]: '0x016781F588Cb50234f12b6A6EeA8a36b0BCe2f37',
  [ChainId.HYPERSPACE]: '0x65C048F785Ac27D17Ea1F6433A8bc47f2F36b7aE',
}

export {
  PERMISSIVE_MULTICALL_ABI,
  TOKEN_REGISTRY_ABI,
  PERMISSIVE_MULTICALL_ADDRESS,
  STAKING_REWARDS_FACTORY_ABI,
  STAKING_REWARDS_DISTRIBUTION_ABI
}
