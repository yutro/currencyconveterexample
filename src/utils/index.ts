import { CurrencyType } from '../types/CurrencyType';
import { ExchangeType } from '../pages/Exchange/exchangeTypes';

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
