import { CurrencyType } from './CurrencyType';

export type RateType = {
  [key in CurrencyType]: number;
};

export type FxResponse = {
  disclaimer: string;
  license: string;
  timestamp: number;
  base: CurrencyType;
  rates: RateType;
};
