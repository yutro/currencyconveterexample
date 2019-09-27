import React, { ReactElement } from 'react';
import { Grid, Paper, TextField, FormHelperText } from '@material-ui/core';
import { CurrencyListType, CurrencyType } from '../../types/CurrencyType';
import { CurrencySelect } from '../CurrencySelect/CurrencySelect';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { useCurrencyPromptHandler, useStyles } from './CurrencyPromptHandlers';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reducers';
import { getPocketByCurrency } from '../../pages/Pocket/helpers';

type CurrencyPromptType = Readonly<{
  amount: number;
  currency: CurrencyType;
  currencyList: CurrencyListType;
  index: number;
}>;

export const CurrencyPrompt = ({
  currencyList,
  currency,
  amount,
  index
}: CurrencyPromptType): ReactElement | null => {
  const pocket = useSelector(({ pockets }: AppStateType) =>
    getPocketByCurrency(currency, pockets)
  );

  const classes = useStyles();
  const {
    amountChangeHandler,
    selectCurrencyHandler
  } = useCurrencyPromptHandler(index);

  return pocket ? (
    <Paper className={classes.contentContainer}>
      <Grid container justify="space-between">
        <Grid item xs={3}>
          <CurrencySelect
            currencyList={currencyList}
            name="base"
            defaultSelect={currency}
            onSelect={selectCurrencyHandler}
          />
          <FormHelperText>Balance: {pocket.amount}</FormHelperText>
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
              onChange={amountChangeHandler}
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
  ) : null;
};
