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
      '0x707f2fE56A440E766bec41aBC9fc8695567D0ceA',
      18,
      'WETH',
      'Wrapped Ether'
    ),
    [ChainId.MUMBAI]: new Token(
      ChainId.MUMBAI,
      '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      18,
      'WMATIC',
      'Wrapped Matic'
    ),
    [ChainId.HYPERSPACE]: new Token(
      ChainId.HYPERSPACE,
      '0x3467C3Ed08e806C12E713C3951139c29fb4946b5',
      18,
      'WETH',
      'Wrapped Ether'
    ),
  }

  public static readonly DEZU: { [key: number]: Token } = {
    [ChainId.MANTLE_TESTNET]: new Token(ChainId.MANTLE_TESTNET, '0xCab6D79dD732779f081B5868AAb1e64F357e90A9', 8, 'DEZU', 'DexSwapZonu'),
    [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, '0x55dd6D5b534e4B5EC178f99eC344B6915e78CCB6', 18, 'DEZU', 'DexSwapZonu'),
    [ChainId.HYPERSPACE]: new Token(ChainId.HYPERSPACE, '0xd6493381eE85CCb3590b0Fc0308b62549d5AD6C7', 18, 'DEZU', 'DexSwapZonu'),
  }

  public static readonly ZONU: { [key: number]: Token } = {
    [ChainId.MANTLE_TESTNET]: new Token(ChainId.MANTLE_TESTNET, '0x9C3a2429A288dBEA75C819Fd18C0b35a0C3E1361', 18, 'ZONU', 'ZoNulet'),
    [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, '0x496a89968Fb0e0EffE32Db03102B613084239ED3', 18, 'ZONU', 'ZoNulet'),
    [ChainId.HYPERSPACE]: new Token(ChainId.HYPERSPACE, '0x48a47b30A3e6B2edeA037d57172618DF86418931', 18, 'ZONU', 'ZoNulet'),
  }

  public static readonly ZGEM: { [key: number]: Token } = {
    [ChainId.MANTLE_TESTNET]: new Token(ChainId.MANTLE_TESTNET, '0x8104B78e614a32ac4C5Cb54941a6B3b27143AbdB', 18, 'ZGEM', 'ZonuGem'),
    [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, '0x4E0fCB137e54d3AeCF931A0A2e11e731729f1e08', 18, 'ZGEM', 'ZonuGem'),
    [ChainId.HYPERSPACE]: new Token(ChainId.HYPERSPACE, '0xB871D11f15c8De5dd7245c9aaCF1e0Dd888B2b36', 18, 'ZGEM', 'ZonuGem'),
  }

  public static readonly WBTC: { [key: number]: Token } = {
    [ChainId.MANTLE_TESTNET]: new Token(ChainId.MANTLE_TESTNET, '0x777638AB212Fab2F1D1202DedCC7f18D2c527b50', 8, 'WBTC', 'Wrapped BTC'),
    [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, '0x5f9059D8B29BbAfe92F98AFD769169aaf4443333', 8, 'WBTC', 'Wrapped BTC'),
    [ChainId.HYPERSPACE]: new Token(ChainId.HYPERSPACE, '0xEb40c24C1b65Ff44BD28E131f943C2b75882067C', 18, 'WBTC', 'Wrapped BTC'),
  }

  public static readonly USDC: { [key: number]: Token } = {
    [ChainId.MANTLE_TESTNET]: new Token(ChainId.MANTLE_TESTNET, '0x97830fa9e74C5a596C8994C37f9e92cBc42560B3', 8, 'USDC', 'USDC'),
    [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, '0xD56ffA679f3de6007FD0e96Ab57a42224e2DD152', 8, 'USDC', 'USDC'),
    [ChainId.HYPERSPACE]: new Token(ChainId.HYPERSPACE, '0x9775Dc2e8513BaEbD24e323dbde04A8D5822Ef82', 18, 'USDC', 'USDC'),
  }

  public static readonly USDT: { [key: number]: Token } = {
    [ChainId.MANTLE_TESTNET]: new Token(ChainId.MANTLE_TESTNET, '0xc75aE86d9F9d8C150b4bFf9A8Fb77481B0611a56', 8, 'USDT', 'USDT'),
    [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, '0x800F85756B007be98f906e23F1665af89CBA92Fa', 8, 'USDT', 'USDT'),
    [ChainId.HYPERSPACE]: new Token(ChainId.HYPERSPACE, '0x4C7EB1cCff2176adBBA9812b390411ceCEB4404F', 18, 'USDT', 'USDT'),

  }

  public static readonly WBNB: { [key: number]: Token } = {
    [ChainId.MANTLE_TESTNET]: new Token(ChainId.MANTLE_TESTNET, '0xD711d6Ee5cD88d8E33536a4b2918605B084F1A03', 8, 'WBNB', 'WBNB'),
    [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, '0xb61eb02201596A9EC02341270bCa314c1d21cAdC', 8, 'WBNB', 'WBNB'),
    [ChainId.HYPERSPACE]: new Token(ChainId.HYPERSPACE, '0xd08810931E9b92Ca546149533Bf26D23C162E5Ac', 18, 'WBNB', 'WBNB'),
  }

  private static readonly NATIVE_CURRENCY_WRAPPER: { [chainId in ChainId]: Token } = {
    [ChainId.MAINNET]: Token.WETH[ChainId.MAINNET],
    [ChainId.MANTLE_TESTNET]: Token.WETH[ChainId.MANTLE_TESTNET],
    [ChainId.MUMBAI]: Token.WETH[ChainId.MUMBAI],
    [ChainId.HYPERSPACE]: Token.WETH[ChainId.HYPERSPACE],
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
export const ZONU = Token.ZONU
export const ZGEM = Token.ZGEM

