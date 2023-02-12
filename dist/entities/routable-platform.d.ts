import { BigintIsh, ChainId } from '../constants';
/**
 * A platform to which DEXSWAP can route through.
 */
export declare class RoutablePlatform {
    readonly name: string;
    readonly factoryAddress: {
        [supportedChainId in ChainId]?: string;
    };
    readonly routerAddress: {
        [supportedChainId in ChainId]?: string;
    };
    readonly initCodeHash: string;
    readonly defaultSwapFee: BigintIsh;
    static readonly DEXSWAP: RoutablePlatform;
    static readonly UNISWAP: RoutablePlatform;
    constructor(name: string, factoryAddress: {
        [supportedChainId in ChainId]?: string;
    }, routerAddress: {
        [supportedChainId in ChainId]?: string;
    }, initCodeHash: string, defaultSwapFee: BigintIsh);
    supportsChain(chainId: ChainId): boolean;
}
