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

    state.currencies[index].currency = currency;

    if (index === 1 && state.rates) {
      const baseAmount = state.currencies[0].amount;
      const currencyRate = state.rates[currency];

      state.currencies[1].amount = normalizeInput(
        convertCurrency(baseAmount, currencyRate, index)
      );
    }

    return { ...state };
  }

  if (action.type === 'FLIP_EXCHANGE') {
    const { currencies, ...rest } = state;
    const reversedCurrencies = [...currencies].reverse();

    return { ...rest, currencies: reversedCurrencies };
  }

  if (action.type === 'SET_AMOUNT' && action.payload) {
    const { amount: payloadAmount, index } = action.payload;

    state.currencies[index].amount = payloadAmount;

    const { currency } = state.currencies[1];

    if (state.rates) {
      const currencyRate = state.rates[currency];

      state.currencies[1].amount = normalizeInput(
        convertCurrency(payloadAmount, currencyRate, index)
      );
    }

    return { ...state };
  }

  if (action.type === 'SET_RATES') {
    const { payload } = action;

    state.rates = payload;

    return { ...state };
  }

  return state;
};
