import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public static readonly WETH: { [key: number]: Token } = {
    [ChainId.MAINNET]: new Token(
      ChainId.MAINNET,
      '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      18,
      'WETH',
      'Wrapped Ether'
    ),
    [ChainId.MANTLE_TESTNET]: new Token(
      ChainId.MANTLE_TESTNET,
      '0x41810F1664ce580072D9c23286Ea5df68db766F1',
      18,
      'WETH',
      'Wrapped Ether'
    ),
  }

  public static readonly DEZU: { [key: number]: Token } = {
    [ChainId.MANTLE_TESTNET]: new Token(ChainId.MANTLE_TESTNET, '0xAc12F7948eFdfA205Df7daD3D1Ee04E564009ECB', 18, 'DEZU', 'DexSwapZonu')
  }

  public static readonly WBTC: { [key: number]: Token } = {
    [ChainId.MANTLE_TESTNET]: new Token(ChainId.MANTLE_TESTNET, '0x777638AB212Fab2F1D1202DedCC7f18D2c527b50', 8, 'WBTC', 'Wrapped BTC')
  }

  public static readonly USDC: { [key: number]: Token } = {
    [ChainId.MANTLE_TESTNET]: new Token(ChainId.MANTLE_TESTNET, '0x97830fa9e74C5a596C8994C37f9e92cBc42560B3', 8, 'USDC', 'USDC')
  }

  public static readonly USDT: { [key: number]: Token } = {
    [ChainId.MANTLE_TESTNET]: new Token(ChainId.MANTLE_TESTNET, '0xc75aE86d9F9d8C150b4bFf9A8Fb77481B0611a56', 8, 'USDT', 'USDT')

  }

  public static readonly WBNB: { [key: number]: Token } = {
    [ChainId.MANTLE_TESTNET]: new Token(ChainId.MANTLE_TESTNET, '0xD711d6Ee5cD88d8E33536a4b2918605B084F1A03', 8, 'WBNB', 'WBNB')
  }

  private static readonly NATIVE_CURRENCY_WRAPPER: { [chainId in ChainId]: Token } = {
    [ChainId.MAINNET]: Token.WETH[ChainId.MAINNET],
    [ChainId.MANTLE_TESTNET]: Token.WETH[ChainId.MANTLE_TESTNET],
  }

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }

  public static getNativeWrapper(chainId: ChainId): Token {
    return Token.NATIVE_CURRENCY_WRAPPER[chainId]
  }

  public static isNativeWrapper(token: Token): boolean {
    return Token.NATIVE_CURRENCY_WRAPPER[token.chainId].equals(token)
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

// reexport for convenience
export const WETH = Token.WETH
export const WBNB = Token.WBNB
export const WBTC = Token.WBTC
export const USDC = Token.USDC
export const USDT = Token.USDT
export const DEZU = Token.DEZU

