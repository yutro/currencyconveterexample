import { PocketStateType } from './PocketTypes';
import { PocketActions } from './PocketActions';
import { updatePocketActionHandler } from './PocketReducerHandlers';

export const initialState: PocketStateType = {
  allIds: [1, 2, 3],
  byId: {
    '1': { amount: 100, currency: 'USD', id: 1 },
    '2': { amount: 0, currency: 'GBP', id: 2 },
    '3': { amount: 0, currency: 'EUR', id: 3 }
  }
};

export const pockets = (
  state = initialState,
  { type, payload }: PocketActions
): PocketStateType => {
  if (type === 'UPDATE_BASE_POCKET') {
    return updatePocketActionHandler(state, payload, 'base');
  }

  if (type === 'UPDATE_TARGET_POCKET') {
    return updatePocketActionHandler(state, payload, 'target');
  }

  return state;
};
