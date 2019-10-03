import { ExchangeType } from './exchangeTypes';
import { ExchangeActionsType } from './ExchangeActions';
import {
  setCurrencyActionHandler,
  flipExchangeActionHandler,
  setAmountActionHandler
} from './ExchangeReducerHandlers';

export const initialState: ExchangeType = {
  currencies: [{ amount: 0, currency: 'USD' }, { amount: 0, currency: 'GBP' }],
  rates: undefined
};

export const exchange = (
  state = initialState,
  action: ExchangeActionsType
): ExchangeType => {
  if (action.type === 'SET_CURRENCY' && action.payload) {
    return setCurrencyActionHandler(state, action.payload);
  }

  if (action.type === 'FLIP_EXCHANGE') {
    return flipExchangeActionHandler(state);
  }

  if (action.type === 'SET_AMOUNT' && action.payload) {
    return setAmountActionHandler(state, action.payload);
  }

  if (action.type === 'SET_RATES') {
    const { payload: rates } = action;

    return { ...state, rates };
  }

  return state;
};
