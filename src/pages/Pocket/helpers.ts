import { CurrencyType } from '../../types/CurrencyType';
import { PocketStateType, PocketType } from './PocketTypes';

export const getPocketByCurrency = (
  currency: CurrencyType,
  pockets: PocketStateType
): PocketType | null => {
  const pocketId = pockets.allIds.find(id => {
    const { currency: pocketCurrency } = pockets.byId[id];

    return currency === pocketCurrency;
  });

  if (pocketId) {
    return pockets.byId[pocketId];
  }

  return null;
};
