import { PocketStateType } from './PocketTypes';
import { getPocketByCurrency } from './helpers';

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
  action: { type: string; payload?: any }
): PocketStateType => {
  if (action.type === 'UPDATE_BASE_POCKET') {
    const pocket = getPocketByCurrency(action.payload.currency, state);

    if (pocket) {
      return {
        ...state,
        byId: {
          ...state.byId,
          [pocket.id]: {
            ...pocket,
            amount: pocket.amount - action.payload.amount
          }
        }
      };
    }
  }

  if (action.type === 'UPDATE_TARGET_POCKET') {
    const pocket = getPocketByCurrency(action.payload.currency, state);

    if (pocket) {
      return {
        ...state,
        byId: {
          ...state.byId,
          [pocket.id]: {
            ...pocket,
            amount: pocket.amount + action.payload.amount
          }
        }
      };
    }
  }

  return state;
};
