import { ChangeEvent } from 'react';
import { CurrencyType } from '../../types/CurrencyType';
import { SelectHandlerType } from './CurrencySelect';

export const selectHandler = (onSelect: SelectHandlerType) => ({
  target: { value }
}: ChangeEvent<{ value: unknown }>): void => {
  const val = value as CurrencyType;

  if (val) {
    onSelect(val);
  }
};
