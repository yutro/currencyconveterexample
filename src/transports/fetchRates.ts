/* global Promise, process */
import { CurrencyType } from '../types/CurrencyType';
import { FxResponse, RateType } from '../types/FxApi';
import { fxData } from '../tests/mocks/FxApiResponse';

export const fetchRates = (currency: CurrencyType): Promise<RateType> => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('fetch rates: dummy data');

    return new Promise<RateType>((resolve): void => resolve(fxData.rates));
  }

  return new Promise<RateType>((resolve): void => {
    fetch(
      `http://data.fixer.io/api/latest?access_key=358183c9d3e9e0ebf6590821377322ba&base=${currency}&symbols=USD,GBP,EUR`
    )
      .then(response => response.json())
      .then((data: FxResponse) => {
        resolve(data.rates);
      })
      .catch(e => console.log('--- error fetching data ---', e));
  });
};
