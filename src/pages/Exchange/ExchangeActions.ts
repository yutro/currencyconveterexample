import { CurrencyType } from '../../types/CurrencyType';

const SET_CURRENCY = 'SET_CURRENCY';
const SET_AMOUNT = 'SET_AMOUNT';

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
  amount: string;
  index: number;
};

type SetAmountReturnType = {
  payload: SetAmountType;
  type: typeof SET_AMOUNT;
};

export const setAmount = (
  amount: string,
  index: number
): SetAmountReturnType => ({
  payload: { amount, index },
  type: 'SET_AMOUNT'
});

export type ExchangeActionsType = SetCurrencyReturnType | SetAmountReturnType;
// type: 'SET_CURRENCY' | 'SET_AMOUNT' | 'SET_RATES' | 'FLIP_EXCHANGE';