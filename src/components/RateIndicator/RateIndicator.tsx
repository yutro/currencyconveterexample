import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reducers';
import { CurrencyType } from '../../types/CurrencyType';

type PropsType = {
  baseCurrency: CurrencyType;
  targetCurrency: CurrencyType;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rateIndicator: {
      lineHeight: '2.5em',
      marginLeft: theme.spacing(10)
    }
  })
);

export const RateIndicator = ({
  baseCurrency,
  targetCurrency
}: PropsType): ReactElement | null => {
  const classes = useStyles();
  const { rates } = useSelector(({ exchange }: AppStateType) => exchange);

  if (!rates || !rates[baseCurrency]) {
    return null;
  }

  return (
    <Grid item xs={6} className={classes.rateIndicator}>
      {`1 ${baseCurrency} = ${rates[targetCurrency]} ${targetCurrency}`}
    </Grid>
  );
};
