import React, { FunctionComponent, useEffect } from 'react';
import { CurrencyListType, CurrencyType } from '../../types/CurrencyType';
import { AppStateType } from '../../redux/reducers';
import { ConvertButton } from '../../components/ConvertButton/ConvertButton';
import { CurrencyPrompt } from '../../components/CurrencyPrompt/CurrencyPrompt';
import { useDispatch, useSelector } from 'react-redux';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { PocketType } from '../Pocket/PocketTypes';
import { fetchRates } from '../../tests/mocks/FxApiResponse';
import { FlipExchange } from '../../components/FlipExchange/FlipExchange';
import { setAmount, setRates } from './ExchangeActions';

const excludeCurrency = (
  currencyList: CurrencyListType,
  excludeCurrency: CurrencyType
): CurrencyListType =>
  currencyList.filter(
    (currency: CurrencyType): boolean => currency !== excludeCurrency
  );

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flipExchange: {
      marginLeft: theme.spacing(5)
    }
  })
);

export const Exchange: FunctionComponent = () => {
  const classes = useStyles();
  const pockets = useSelector(({ pockets }: AppStateType) => pockets);
  const { currencies } = useSelector(({ exchange }: AppStateType) => exchange);
  const dispatch = useDispatch();
  const currencyList: CurrencyListType = pockets.allIds.map((id: number) => {
    const { currency }: PocketType = pockets.byId[id];

    return currency;
  });
  const [exchangeCardBase, exchangeCardTarget] = currencies;
  const { currency, amount } = exchangeCardBase;

  useEffect(() => {
    fetchRates(currency, { dummy: true }).then(rates => {
      dispatch(setRates(rates));
      // recalculate target after fetching
      dispatch(setAmount(amount, 0));
    });

    const intervalID = setInterval(() => {
      fetchRates(currency, { dummy: true }).then(rates => {
        dispatch(setRates(rates));
        // recalculate target after fetching
        dispatch(setAmount(amount, 0));
      });
    }, 10000);

    return (): void => clearInterval(intervalID);
  }, [dispatch, currency]);

  return (
    <>
      <CurrencyPrompt
        {...exchangeCardBase}
        index={0}
        currencyList={excludeCurrency(
          currencyList,
          exchangeCardTarget.currency
        )}
      />
      <FlipExchange className={classes.flipExchange} />
      <CurrencyPrompt
        {...exchangeCardTarget}
        index={1}
        currencyList={excludeCurrency(currencyList, exchangeCardBase.currency)}
      />
      <Grid container justify="center">
        <ConvertButton />
      </Grid>
    </>
  );
};
