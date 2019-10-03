/* global Promise, process */
import { FxResponse, RateType } from '../types/FxApi';
import { fxData } from '../tests/mocks/FxApiResponse';

export const fetchRates = (): Promise<RateType> => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('fetch rates: dummy data');

    return new Promise<RateType>((resolve): void => resolve(fxData.rates));
  }

  return new Promise<RateType>((resolve): void => {
    fetch(`https://api.exchangeratesapi.io/latest?base=USD`)
      .then(response => response.json())
      .then((data: FxResponse) => {
        resolve(data.rates);
      })
      .catch(e => console.log('--- error fetching data ---', e));
  });
};
