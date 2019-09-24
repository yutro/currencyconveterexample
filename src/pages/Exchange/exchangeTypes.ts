import { CurrencyType } from '../../types/CurrencyType';
import { RateType } from '../../types/FxApi';

export type ExchangeItemType = {
  currency: CurrencyType;
  amount: number;
};

export type ExchangeCurrenciesListType = ReadonlyArray<ExchangeItemType>;

export type ExchangeType = {
  rates: RateType | {};
  currencies: ExchangeCurrenciesListType;
};
