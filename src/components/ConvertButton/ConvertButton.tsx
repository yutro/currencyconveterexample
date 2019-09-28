import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reducers';
import { ExchangeCurrenciesListType } from '../../pages/Exchange/exchangeTypes';
import { getPocketByCurrency } from '../../pages/Pocket/helpers';
import { PocketStateType, PocketType } from '../../pages/Pocket/PocketTypes';
import { convert } from './ConvertButtonHandlers';

export const ConvertButton = () => {
  const dispatch = useDispatch();
  const [
    baseExchangeItem,
    targetExchangeItem
  ]: ExchangeCurrenciesListType = useSelector(
    ({ exchange: { currencies } }: AppStateType) => currencies
  );
  const pockets: PocketStateType = useSelector(
    ({ pockets }: AppStateType) => pockets
  );
  const basePocket: PocketType | null = getPocketByCurrency(
    baseExchangeItem.currency,
    pockets
  );

  const [buttonDisabled, setButtonDisabled] = useState(true);

  if (basePocket) {
    if (
      baseExchangeItem.amount &&
      baseExchangeItem.amount <= basePocket.amount
    ) {
      if (buttonDisabled) {
        setButtonDisabled(false);
      }
    } else {
      if (!buttonDisabled) {
        setButtonDisabled(true);
      }
    }
  }

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={convert(dispatch, [baseExchangeItem, targetExchangeItem])}
      disabled={buttonDisabled}
    >
      Convert
    </Button>
  );
};
