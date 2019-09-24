import { CurrencyType } from '../../types/CurrencyType';

export type PocketType = Readonly<{
  amount: number;
  currency: CurrencyType;
  id: number;
}>;

export type PocketListType = Readonly<{
  [key: string]: PocketType;
}>;

export type PocketStateType = {
  byId: PocketListType;
  allIds: ReadonlyArray<number>;
};