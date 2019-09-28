import { PocketStateType } from './PocketTypes';
import { getPocketByCurrency } from './helpers';
import { PocketActions } from './PocketActions';

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
    const pocket = getPocketByCurrency(payload.currency, state);

    if (pocket) {
      return {
        ...state,
        byId: {
          ...state.byId,
          [pocket.id]: {
            ...pocket,
            amount: pocket.amount - payload.amount
          }
        }
      };
    }
  }

  if (type === 'UPDATE_TARGET_POCKET') {
    const pocket = getPocketByCurrency(payload.currency, state);

    if (pocket) {
      return {
        ...state,
        byId: {
          ...state.byId,
          [pocket.id]: {
            ...pocket,
            amount: pocket.amount + payload.amount
          }
        }
      };
    }
  }

  return state;
};
