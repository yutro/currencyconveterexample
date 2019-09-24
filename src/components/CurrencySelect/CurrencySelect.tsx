import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { CurrencyListType, CurrencyType } from '../../types/CurrencyType';

type CurrencySelectPropsType = {
  currencyList: CurrencyListType;
  name: string;
  onSelect: (value: CurrencyType) => void;
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
        onChange={({ target: { value } }) => {
          if (value) {
            // @ts-ignore
            onSelect(value);
          }
        }}
        inputProps={{
          name,
          id: name
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
