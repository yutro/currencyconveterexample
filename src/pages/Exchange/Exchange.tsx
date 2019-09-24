import React, { FunctionComponent, useEffect } from 'react';
import { CurrencyListType, CurrencyType } from '../../types/CurrencyType';
import { AppStateType } from '../../redux/reducers';
import { ConvertButton } from '../../components/ConvertButton/ConvertButton';
import { CurrencyPrompt } from '../../components/CurrencyPrompt/CurrencyPrompt';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { PocketType } from '../Pocket/PocketTypes';
import { fxData } from '../../tests/mocks/FxApiResponse';

const excludeCurrency = (
  currencyList: CurrencyListType,
  excludeCurrency: CurrencyType
): CurrencyListType =>
  currencyList.filter(
    (currency: CurrencyType): boolean => currency !== excludeCurrency
  );

export const Exchange: FunctionComponent = () => {
  const pockets = useSelector(({ pockets }: AppStateType) => pockets);
  const { currencies } = useSelector(({ exchange }: AppStateType) => exchange);
  const dispatch = useDispatch();
  const currencyList: CurrencyListType = pockets.allIds.map((id: number) => {
    const { currency }: PocketType = pockets.byId[id];

    return currency;
  });

  useEffect(() => {
    const intervalID: any = setInterval(() => {
      // const [{ currency }] = currencies;

      // fetch(
      //   `http://data.fixer.io/api/latest?access_key=358183c9d3e9e0ebf6590821377322ba&base=${currency}&symbols=USD,GBP,EUR`
      // )
      //   .then(response => response.json())
      //   .then((data: FxResponse) => {
      //     console.log('-----', data);
      //     // dispatch({ type: 'SET_RATES', payload: data.rates });
      //   })
      //   .catch(e => console.log('--- error fetching data ---', e));

      dispatch({ payload: fxData.rates, type: 'SET_RATES' });
    }, 10000);

    dispatch({ payload: fxData.rates, type: 'SET_RATES' });

    return (): void => clearInterval(intervalID);
  }, [dispatch]);

  return (
    <>
      {currencies.map((currencyItem, index) => {
        return (
          <Grid item key={index}>
            <CurrencyPrompt
              {...currencyItem}
              index={index}
              currencyList={
                index === 0
                  ? excludeCurrency(currencyList, currencies[1].currency)
                  : excludeCurrency(currencyList, currencies[0].currency)
              }
            />
          </Grid>
        );
      })}
      <Grid container justify="center">
        <ConvertButton />
      </Grid>
    </>
  );
};