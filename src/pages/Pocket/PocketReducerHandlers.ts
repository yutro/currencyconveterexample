import { getPocketByCurrency } from './helpers';
import { PocketStateType } from './PocketTypes';
import { UpdatePocketPayloadType } from './PocketActions';

export const updatePocketActionHandler = (
  state: PocketStateType,
  payload: UpdatePocketPayloadType,
  type: 'base' | 'target'
): PocketStateType => {
  const pocket = getPocketByCurrency(payload.currency, state);

  if (pocket) {
    return {
      ...state,
      byId: {
        ...state.byId,
        [pocket.id]: {
          ...pocket,
          amount:
            type === 'base'
              ? Number(pocket.amount) - Number(payload.amount)
              : Number(pocket.amount) + Number(payload.amount)
        }
      }
    };
  }

  return state;
};
