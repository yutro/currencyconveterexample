import { CurrencyType } from '../../types/CurrencyType';

const UPDATE_BASE_POCKET = 'UPDATE_BASE_POCKET';
const UPDATE_TARGET_POCKET = 'UPDATE_TARGET_POCKET';

type PayloadType = { amount: number; currency: CurrencyType };

type UpdateBasePocketReturnType = {
  type: typeof UPDATE_BASE_POCKET;
  payload: PayloadType;
};
type UpdateTargetPocketReturnType = {
  type: typeof UPDATE_TARGET_POCKET;
  payload: PayloadType;
};

export const updatePocket = (
  type: 'base' | 'target',
  payload: PayloadType
): UpdateBasePocketReturnType | UpdateTargetPocketReturnType => ({
  payload,
  type: type === 'base' ? UPDATE_BASE_POCKET : UPDATE_TARGET_POCKET
});

export type PocketActions =
  | UpdateBasePocketReturnType
  | UpdateTargetPocketReturnType;
