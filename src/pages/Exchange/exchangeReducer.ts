import { ExchangeType } from './exchangeTypes';
import { ExchangeActionsType } from './ExchangeActions';
import { convertThroughCrossCourse, getExchangeRates } from '../../utils';

export const initialState: ExchangeType = {
  currencies: [{ amount: 0, currency: 'USD' }, { amount: 0, currency: 'GBP' }],
  rates: undefined
};

export const exchange = (
  state = initialState,
  action: ExchangeActionsType
): ExchangeType => {
  if (action.type === 'SET_CURRENCY' && action.payload) {
    const { currency, index } = action.payload;
    const {
      currencies: [base, target]
    } = state;

    const { amount } = base;

    if (index === 0) {
      const [baseCurrencyRate, targetCurrencyRate] = getExchangeRates(
        currency,
        target.currency,
        state
      );

      return {
        ...state,
        currencies: [
          { ...base, currency },
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

    const [baseCurrencyRate, targetCurrencyRate] = getExchangeRates(
      currency,
      base.currency,
      state
    );

    return {
      ...state,
      currencies: [
        base,
        {
          amount: convertThroughCrossCourse(
            targetCurrencyRate,
            baseCurrencyRate,
            amount
          ),
          currency
        }
      ]
    };
  }

  if (action.type === 'FLIP_EXCHANGE') {
    const { currencies, ...rest } = state;
    const reversedCurrencies = [...currencies].reverse();

    return { ...rest, currencies: reversedCurrencies };
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
