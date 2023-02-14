import { ChainId } from '../constants';
import { Currency } from './currency';
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export declare class Token extends Currency {
    readonly chainId: ChainId;
    readonly address: string;
    static readonly WETH: {
        [key: number]: Token;
    };
    static readonly DEZU: {
        [key: number]: Token;
    };
    static readonly ZONU: {
        [key: number]: Token;
    };
    static readonly ZGEM: {
        [key: number]: Token;
    };
    static readonly WBTC: {
        [key: number]: Token;
    };
    static readonly USDC: {
        [key: number]: Token;
    };
    static readonly USDT: {
        [key: number]: Token;
    };
    static readonly WBNB: {
        [key: number]: Token;
    };
    private static readonly NATIVE_CURRENCY_WRAPPER;
    constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string);
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    equals(other: Token): boolean;
    /**
     * Returns true if the address of this token sorts before the address of the other token
     * @param other other token to compare
     * @throws if the tokens have the same address
     * @throws if the tokens are on different chains
     */
    sortsBefore(other: Token): boolean;
    static getNativeWrapper(chainId: ChainId): Token;
    static isNativeWrapper(token: Token): boolean;
}
/**
 * Compares two currencies for equality
 */
export declare function currencyEquals(currencyA: Currency, currencyB: Currency): boolean;
export declare const WETH: {
    [key: number]: Token;
};
export declare const WBNB: {
    [key: number]: Token;
};
export declare const WBTC: {
    [key: number]: Token;
};
export declare const USDC: {
    [key: number]: Token;
};
export declare const USDT: {
    [key: number]: Token;
};
export declare const DEZU: {
    [key: number]: Token;
};
export declare const ZONU: {
    [key: number]: Token;
};
export declare const ZGEM: {
    [key: number]: Token;
};
