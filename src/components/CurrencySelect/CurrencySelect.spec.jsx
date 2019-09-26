import { CurrencySelect } from './CurrencySelect';
import { mount } from 'enzyme';
import React from 'react';
import { selectHandler } from './CurrencySelectHandlers';

describe('CurrencyList', () => {
  const component = mount(
    <CurrencySelect
      currencyList={['USD', 'JBP']}
      name="select-1"
      defaultSelect="USD"
      onSelect={jest.fn()}
    />
  );

  const input = component.find('input');

  it('should contain default currency', () => {
    expect(input.prop('value')).toBe('USD');
  });

  describe('selectHandler', () => {
    it('should invoke onSelect callback when invoked', () => {
      const callback = jest.fn();

      selectHandler(callback)({ target: { value: 'USD' } });
      expect(callback).toBeCalledWith('USD');
    });
  });
});
