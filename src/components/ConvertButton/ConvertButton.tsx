import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reducers';
import { ExchangeCurrenciesListType } from '../../pages/Exchange/exchangeTypes';
import { getPocketByCurrency } from '../../pages/Pocket/helpers';
import { PocketStateType, PocketType } from '../../pages/Pocket/PocketTypes';

export const ConvertButton = () => {
  const [base, target]: ExchangeCurrenciesListType = useSelector(
    ({ exchange: { currencies } }: AppStateType) => currencies
  );
  const pockets: PocketStateType = useSelector(
    ({ pockets }: AppStateType) => pockets
  );
  const basePocket: PocketType | null = getPocketByCurrency(
    base.currency,
    pockets
  );

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const dispatch = useDispatch();
  const convert = () => {
    dispatch({
      payload: { amount: base.amount, currency: base.currency },
      type: 'UPDATE_BASE_POCKET'
    });
    dispatch({
      payload: { amount: target.amount, currency: target.currency },
      type: 'UPDATE_TARGET_POCKET'
    });
  };

  if (basePocket) {
    if (base.amount && base.amount <= basePocket.amount) {
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
      onClick={convert}
      disabled={buttonDisabled}
    >
      Convert
    </Button>
  );
};
