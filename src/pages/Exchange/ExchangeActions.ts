import { CurrencyType } from '../../types/CurrencyType';
import { RateType } from '../../types/FxApi';

const SET_CURRENCY = 'SET_CURRENCY';
const SET_AMOUNT = 'SET_AMOUNT';
const SET_RATES = 'SET_RATES';

type SetCurrencyType = {
  currency: CurrencyType;
  index: number;
};
type SetCurrencyReturnType = {
  payload: SetCurrencyType;
  type: typeof SET_CURRENCY;
};

export const setCurrency = (
  currency: CurrencyType,
  index: number
): SetCurrencyReturnType => ({
  payload: { currency, index },
  type: SET_CURRENCY
});

type SetAmountType = {
  amount: number;
  index: number;
};

type SetAmountReturnType = {
  payload: SetAmountType;
  type: typeof SET_AMOUNT;
};

export const setAmount = (
  amount: number,
  index: number
): SetAmountReturnType => ({
  payload: { amount, index },
  type: 'SET_AMOUNT'
});

type SetRatesReturnType = {
  payload: RateType;
  type: typeof SET_RATES;
};

export const setRates = (payload: RateType): SetRatesReturnType => ({
  payload,
  type: SET_RATES
});

export type ExchangeActionsType = SetCurrencyReturnType | SetAmountReturnType | SetRatesReturnType;
// type: 'SET_CURRENCY' | 'SET_AMOUNT' | 'SET_RATES' | 'FLIP_EXCHANGE';
