import { useDispatch } from 'react-redux';
import { CurrencyType } from '../../types/CurrencyType';
import { ChangeEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useCurrencyPromptHandler = (index: number) => {
  const dispatch = useDispatch();

  const selectCurrencyHandler = (currency: CurrencyType): void => {
    dispatch({ payload: { currency, index }, type: 'SET_CURRENCY' });
  };

  const amountChangeHandler = ({
    target: { value }
  }: ChangeEvent<{ value: unknown }>): void => {
    dispatch({
      payload: { amount: value, index },
      type: 'SET_AMOUNT'
    });
  };

  return { amountChangeHandler, selectCurrencyHandler };
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      margin: theme.spacing(2),
      padding: theme.spacing(3)
    }
  })
);
