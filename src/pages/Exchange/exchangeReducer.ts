import { ExchangeType } from './exchangeTypes';
import { ExchangeActionsType } from './ExchangeActions';

export const initialState: ExchangeType = {
  currencies: [{ amount: 0, currency: 'USD' }, { amount: 0, currency: 'GBP' }],
  rates: undefined
};

const convertCurrency = (
  amount: number,
  rate: number,
  index: number
): number => {
  return index ? amount / rate : amount * rate;
};
const normalizeInput = (amount: number): number =>
  parseFloat(amount.toFixed(2)) || 0;

export const exchange = (
  state = initialState,
  action: ExchangeActionsType
): ExchangeType => {
  if (action.type === 'SET_CURRENCY' && action.payload) {
    const { currency, index } = action.payload;
    const {
      currencies: [baseCurrencyCard, targetCurrencyCard]
    } = state;

    if (index === 0) {
      return {
        ...state,
        currencies: [{ ...baseCurrencyCard, currency }, targetCurrencyCard]
      };
    }

    const { amount } = baseCurrencyCard;
    const currencyRate = state.rates ? state.rates[currency] : 0;

    return {
      ...state,
      currencies: [
        baseCurrencyCard,
        {
          amount: normalizeInput(convertCurrency(amount, currencyRate, 0)),
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
    const { currency } = target;
    const rate = state.rates ? state.rates[currency] : 0;

    if (index === 0) {
      return {
        ...state,
        currencies: [
          { ...base, amount },
          {
            ...target,
            amount: normalizeInput(convertCurrency(amount, rate, index))
          }
        ]
      };
    }

    return {
      ...state,
      currencies: [
        {
          ...base,
          amount: normalizeInput(convertCurrency(amount, rate, index))
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
