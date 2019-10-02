import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reducers';
import { CurrencyType } from '../../types/CurrencyType';
import { convertThroughCrossCourse } from '../../utils';

type PropsType = {
  baseCurrency: CurrencyType;
  targetCurrency: CurrencyType;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rateIndicator: {
      marginLeft: theme.spacing(5),
      marginTop: theme.spacing(1)
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
      <Paper>
        <Typography component="div" align="center">
          {`1 ${baseCurrency} = ${convertThroughCrossCourse(
            rates[baseCurrency],
            rates[targetCurrency],
            1
          )} ${targetCurrency}`}
        </Typography>
      </Paper>
    </Grid>
  );
};
