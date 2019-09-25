import { ExchangeType } from './exchangeTypes';

const initialState: ExchangeType = {
  currencies: [{ amount: 0, currency: 'USD' }, { amount: 0, currency: 'GBP' }],
  rates: {}
};

type ActionType = {
  type: 'SET_CURRENCY' | 'SET_AMOUNT' | 'SET_RATES' | 'FLIP_EXCHANGE';
  payload?: any;
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
  action: ActionType
): ExchangeType => {
  if (action.type === 'SET_CURRENCY') {
    const { currency, index } = action.payload;

    state.currencies[index].currency = currency;

    return { ...state };
  }

  if (action.type === 'FLIP_EXCHANGE') {
    const { currencies, ...rest } = state;
    const reversedCurrencies = [...currencies].reverse();

    return { ...rest, currencies: reversedCurrencies };
  }

  if (action.type === 'SET_AMOUNT') {
    const { amount: payloadAmount, index } = action.payload;

    state.currencies[index].amount = payloadAmount;

    if (index === 0) {
      const { currency } = state.currencies[1];
      // @ts-ignore
      const currencyRate = state.rates[currency];

      state.currencies[1].amount = normalizeInput(
        convertCurrency(payloadAmount, currencyRate, index)
      );
    } else {
      const { currency } = state.currencies[1];
      // @ts-ignore
      const currencyRate = state.rates[currency];

      state.currencies[0].amount = normalizeInput(
        convertCurrency(payloadAmount, currencyRate, index)
      );
    }

    // if (payloadAmount !== '') {
    //   if (index === 0) {
    //     const { currency } = state.currencies[1];
    //     // @ts-ignore
    //     if (state.rates[currency]) {
    //       // @ts-ignore
    //       const currencyRate = state.rates[currency];
    //
    //       state.currencies[1].amount = normalizeInput(
    //         convertCurrency(payloadAmount, currencyRate)
    //       );
    //     }
    //   }
    //
    //   const { currency } = state.currencies[1];
    //   // @ts-ignore
    //   if (state.rates[currency]) {
    //     // @ts-ignore
    //     const currencyRate = state.rates[currency];
    //
    //     state.currencies[1].amount = normalizeInput(
    //       convertCurrency(payloadAmount, currencyRate)
    //     );
    //   }
    //
    //   state.currencies[0].amount = payloadAmount;
    // }

    return { ...state };
  }

  if (action.type === 'SET_RATES') {
    const { payload } = action;

    state.rates = payload;

    return { ...state };
  }

  return state;
};
