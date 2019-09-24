import React, { ReactElement } from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Theme
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { CurrencyListType, CurrencyType } from '../../types/CurrencyType';
import { CurrencySelect } from '../CurrencySelect/CurrencySelect';
import { useDispatch } from 'react-redux';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

type CurrencyPromptType = Readonly<{
  amount: number;
  currency: CurrencyType;
  currencyList: CurrencyListType;
  index: number;
}>;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      padding: theme.spacing(3),
      margin: theme.spacing(2)
    }
  })
);

export const CurrencyPrompt = ({
  currencyList,
  currency,
  amount,
  index
}: CurrencyPromptType): ReactElement => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Paper className={classes.contentContainer}>
      <Grid container justify="space-between">
        <Grid item xs={2}>
          <CurrencySelect
            currencyList={currencyList}
            name="base"
            defaultSelect={currency}
            onSelect={(currency: CurrencyType): void => {
              dispatch({ type: 'SET_CURRENCY', payload: { index, currency } });
            }}
          />
        </Grid>
        <Grid container justify="center" xs={2}>
          <FontAwesomeIcon icon={faCoins} size="3x" />
        </Grid>
        <Grid item xs={5}>
          <ValidatorForm
            onError={errors => console.log(errors)}
            onSubmit={e => {
              console.log(e);
            }}
          >
            <TextValidator
              label="amount"
              // @ts-ignore
              onChange={({ target: { value } }): void => {
                dispatch({
                  type: 'SET_AMOUNT',
                  payload: { index, amount: value }
                });
              }}
              name="amount"
              value={amount || ''}
              placeholder="0.00"
              validators={['matchRegexp:^\\d+(.\\d{1,2})?$']}
              errorMessages={['please use format "0.00"']}
            >
              <TextField
                id="standard-full-width"
                label="Amount"
                placeholder="0.00"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </TextValidator>
          </ValidatorForm>
        </Grid>
      </Grid>
    </Paper>
  );
};
