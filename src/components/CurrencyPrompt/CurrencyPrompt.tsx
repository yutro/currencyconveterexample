import React, { ChangeEvent, ReactElement } from 'react';
import { Grid, Paper, TextField, FormHelperText } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { CurrencyListType, CurrencyType } from '../../types/CurrencyType';
import { CurrencySelect } from '../CurrencySelect/CurrencySelect';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { useCurrencyPromptHandler, useStyles } from './CurrencyPromptHandlers';

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
}: CurrencyPromptType): ReactElement => {
  const classes = useStyles();
  const {
    amountChangeHandler,
    selectCurrencyHandler
  } = useCurrencyPromptHandler(index);

  return (
    <Paper className={classes.contentContainer}>
      <Grid container justify="space-between">
        <Grid item xs={2}>
          <CurrencySelect
            currencyList={currencyList}
            name="base"
            defaultSelect={currency}
            onSelect={selectCurrencyHandler}
          />
          <FormHelperText>Balance: 0</FormHelperText>
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
  );
};
