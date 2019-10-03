import { ExchangeType } from './exchangeTypes';
import { ExchangeActionsType } from './ExchangeActions';
import { convertThroughCrossCourse, getExchangeRates } from '../../utils';
import {
  setCurrencyActionHandler,
  flipExchangeActionHandler
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
    const { amount, index } = action.payload;
    const {
      currencies: [base, target]
    } = state;

    const [baseCurrencyRate, targetCurrencyRate] = getExchangeRates(
      base.currency,
      target.currency,
      state
    );

    if (index === 0) {
      return {
        ...state,
        currencies: [
          { ...base, amount },
          {
            ...target,
            amount: convertThroughCrossCourse(
              baseCurrencyRate,
              targetCurrencyRate,
              amount
            )
          }
        ]
      };
    }

    return {
      ...state,
      currencies: [
        {
          ...base,
          amount: convertThroughCrossCourse(
            targetCurrencyRate,
            baseCurrencyRate,
            amount
          )
        },
        { ...target, amount }
      ]
    };
  }

  if (action.type === 'SET_RATES') {
    const { payload: rates } = action;

    return { ...state, rates };
  }

  return state;
};
