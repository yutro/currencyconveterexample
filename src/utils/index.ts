import { CurrencyType } from '../types/CurrencyType';
import { ExchangeType } from '../pages/Exchange/exchangeTypes';

export const keysOf = <T extends string>(
  obj: { [key in T]: unknown }
): ReadonlyArray<T> => {
  const keys: Array<T> = [];

  for (const i in obj) {
    keys.push(i);
  }

  return keys;
};

export const convertThroughCrossCourse = (
  baseRate: number,
  targetRate: number,
  amount: number
): number => parseFloat(((amount / baseRate) * targetRate).toFixed(2));

export const getExchangeRates = (
  from: CurrencyType,
  to: CurrencyType,
  state: ExchangeType
): ReadonlyArray<number> => {
  const baseCurrencyRate = state.rates ? state.rates[from] : 0;
  const targetCurrencyRate = state.rates ? state.rates[to] : 0;

  return [baseCurrencyRate, targetCurrencyRate];
};
