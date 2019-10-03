import { Dispatch } from 'redux';
import { ExchangeCurrenciesListType } from '../../pages/Exchange/exchangeTypes';
import { updatePocket } from '../../pages/Pocket/PocketActions';

export const convert = (
  dispatch: Dispatch,
  [baseExchangeItem, targetExchangeItem]: ExchangeCurrenciesListType
) => (): void => {
  dispatch(
    updatePocket('base', {
      amount: baseExchangeItem.amount,
      currency: baseExchangeItem.currency
    })
  );

  dispatch(
    updatePocket('target', {
      amount: targetExchangeItem.amount,
      currency: targetExchangeItem.currency
    })
  );
};
