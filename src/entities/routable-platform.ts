import { BigintIsh, ChainId, defaultSwapFee, FACTORY_ADDRESS, INIT_CODE_HASH, ROUTER_ADDRESS, _30 } from '../constants'

const UNISWAP_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

const UNISWAP_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

/**
 * A platform to which DEXSWAP can route through.
 */
export class RoutablePlatform {
  public readonly name: string
  public readonly factoryAddress: { [supportedChainId in ChainId]?: string }
  public readonly routerAddress: { [supportedChainId in ChainId]?: string }
  public readonly initCodeHash: string
  public readonly defaultSwapFee: BigintIsh

  public static readonly DEXSWAP = new RoutablePlatform(
    'DexSwap',
    FACTORY_ADDRESS,
    ROUTER_ADDRESS,
    INIT_CODE_HASH,
    defaultSwapFee
  )
  public static readonly UNISWAP = new RoutablePlatform(
    'Uniswap',
    { [ChainId.MAINNET]: UNISWAP_FACTORY_ADDRESS},
    { [ChainId.MAINNET]: UNISWAP_ROUTER_ADDRESS},
    '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    _30
  )

  public constructor(
    name: string,
    factoryAddress: { [supportedChainId in ChainId]?: string },
    routerAddress: { [supportedChainId in ChainId]?: string },
    initCodeHash: string,
    defaultSwapFee: BigintIsh
  ) {
    this.name = name
    this.factoryAddress = factoryAddress
    this.routerAddress = routerAddress
    this.initCodeHash = initCodeHash
    this.defaultSwapFee = defaultSwapFee
  }

  public supportsChain(chainId: ChainId): boolean {
    return !!this.factoryAddress[chainId]
  }
}
