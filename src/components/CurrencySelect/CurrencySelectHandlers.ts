import { ChangeEvent } from 'react';
import { CurrencyType } from '../../types/CurrencyType';

export const selectHandler = (onSelect: SelectHandlerType) => ({
  target: { value }
}: ChangeEvent<{ value: unknown }>) => {
  const val = value as CurrencyType;

  if (val) {
    onSelect(val);
  }
};
