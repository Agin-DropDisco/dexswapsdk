import { BigintIsh } from '../../constants';
import { PricedToken } from '../priced-token';
import { CurrencyAmount } from './currencyAmount';
export declare class PricedTokenAmount extends CurrencyAmount {
    readonly token: PricedToken;
    constructor(token: PricedToken, amount: BigintIsh);
    get nativeCurrencyAmount(): CurrencyAmount;
}
