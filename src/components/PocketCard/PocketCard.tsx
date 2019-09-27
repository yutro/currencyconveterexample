import React, { ReactElement } from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme
} from '@material-ui/core';
import { CurrencyType } from '../../types/CurrencyType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

type PocketCardPropsType = Readonly<{
  currency: CurrencyType;
  amount: number;
}>;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      margin: theme.spacing(2),
      padding: theme.spacing(2)
    }
  })
);

export const PocketCard = ({
  currency,
  amount
}: PocketCardPropsType): ReactElement => {
  const classes = useStyles();

  return (
    <Paper className={classes.contentContainer}>
      <Grid container justify="space-between">
        <Grid item xs={2}>
          <Grid container alignItems="center" justify="space-between">
            <FontAwesomeIcon icon={faWallet} size="2x" />
            <Grid item>{currency}</Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          {amount.toFixed(2)}
        </Grid>
      </Grid>
    </Paper>
  );
};
