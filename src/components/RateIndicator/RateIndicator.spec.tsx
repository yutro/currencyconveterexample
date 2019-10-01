import { RateIndicator } from './RateIndicator';
import { useSelector } from 'react-redux';
import React from 'react';
import { mount } from 'enzyme';
import { mockedRates } from '../../tests/mocks/FxApiResponse';

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

describe('RateIndicator', () => {
  (useSelector as jest.Mock).mockReturnValue({ rates: {} });

  it('should be empty when no rates at', () => {
    const component = mount(
      <RateIndicator baseCurrency="USD" targetCurrency="GBP" />
    );

    expect(component.text()).toBeFalsy();
  });

  it('should contain target rate when baseCurrency && targetCurrency && rates are provided', () => {
    (useSelector as jest.Mock).mockReturnValueOnce({
      rates: mockedRates['USD']
    });
    const component = mount(
      <RateIndicator baseCurrency="USD" targetCurrency="GBP" />
    );

    expect(component.text()).toStrictEqual('1 USD = 0.81 GBP');
  });
});
