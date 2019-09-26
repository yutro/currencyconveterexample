import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { CurrencyListType, CurrencyType } from '../../types/CurrencyType';
import { selectHandler } from './CurrencySelectHandlers';

export type SelectHandlerType = (value: CurrencyType) => void;
type CurrencySelectPropsType = {
  currencyList: CurrencyListType;
  name: string;
  onSelect: SelectHandlerType;
  defaultSelect: CurrencyType;
};

export const CurrencySelect = ({
  currencyList,
  defaultSelect,
  name,
  onSelect
}: CurrencySelectPropsType): ReactElement => {
  return (
    <FormControl>
      <InputLabel htmlFor={name}>Currency</InputLabel>
      <Select
        value={defaultSelect}
        onChange={selectHandler(onSelect)}
        inputProps={{
          id: name,
          name
        }}
      >
        {currencyList.map((currency: string) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
