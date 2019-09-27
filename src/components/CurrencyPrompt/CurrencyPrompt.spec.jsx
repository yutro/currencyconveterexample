import { CurrencyPrompt } from './CurrencyPrompt';
import { getMountedComponent } from '../../tests/utils';
import { CurrencySelect } from '../CurrencySelect/CurrencySelect';
import { TextField } from '@material-ui/core';

describe('CurrencyPrompt', () => {
  const { component } = getMountedComponent(CurrencyPrompt, {
    amount: 1,
    currency: 'USD',
    currencyList: ['USD', 'GBP'],
    index: 1
  });

  it('should mount without errors', () => {
    expect(component).toHaveLength(1);
  });

  it('should contain CurrencySelect component', () => {
    expect(component.find(CurrencySelect)).toHaveLength(1);
  });

  it('should contain TextField component', () => {
    expect(component.find(TextField)).toHaveLength(1);
  });
});
