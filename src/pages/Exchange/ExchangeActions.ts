import { CurrencyType } from '../../types/CurrencyType';
import { RateType } from '../../types/FxApi';

const SET_CURRENCY = 'SET_CURRENCY';
const SET_AMOUNT = 'SET_AMOUNT';
const SET_RATES = 'SET_RATES';
const FLIP_EXCHANGE = 'FLIP_EXCHANGE';

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

type FlipExchangeReturnType = { type: typeof FLIP_EXCHANGE };
export const flipExchange = (): FlipExchangeReturnType => ({
  type: FLIP_EXCHANGE
});

export type ExchangeActionsType =
  | SetCurrencyReturnType
  | SetAmountReturnType
  | SetRatesReturnType
  | FlipExchangeReturnType;
