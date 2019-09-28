import { CurrencyType } from '../../types/CurrencyType';
import { getReturnType } from '../../types/utils';

export const updatePocket = (
  type: 'base' | 'target',
  payload: { amount: number; currency: CurrencyType }
) => ({
  payload,
  type: type === 'base' ? 'UPDATE_BASE_POCKET' : 'UPDATE_TARGET_POCKET'
});

const UpdatePocketReturnType = getReturnType(updatePocket);

export type PocketActions = typeof UpdatePocketReturnType;
