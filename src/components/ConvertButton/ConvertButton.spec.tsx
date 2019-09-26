import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { ConvertButton } from './ConvertButton';
import { Button } from '@material-ui/core';
import configureMockStore from 'redux-mock-store';
import { getMockedState } from '../../tests/mocks/appState';
import { AppStateType } from '../../redux/reducers';

const getMountedComponent = () => {
  const mockStore = configureMockStore();
  const store = mockStore(getMockedState());
  const component = mount(
    <Provider store={store}>
      <ConvertButton />
    </Provider>
  );

  return component;
};

describe('ConvertButton', () => {
  afterEach(() => {
    getMockedState.mockClear();
  });

  describe('button', () => {
    const component = getMountedComponent();
    const convertBtn = component.find(Button);

    it('should contain Button when base pocket exists & exchange amount exists & exchange amount <= pocket amount', () => {
      expect(convertBtn).toHaveLength(1);
    });

    it('should be disabled by default', () => {
      expect(convertBtn.prop('disabled')).toBeTruthy();
    });

    it('should contain enabled Button when base pocket exists & exchange amount exists & exchange amount < pocket amount', () => {
      const testState: AppStateType = getMockedState();

      testState.exchange.currencies[0].amount = 50;

      getMockedState.mockRejectedValueOnce(testState);
      const component = getMountedComponent();
      const button = component.find(Button);

      expect(button.prop('disabled')).toBeFalsy();
    });

    it('should contain enabled Button when base pocket exists & exchange amount exists & exchange amount === pocket amount', () => {
      const testState: AppStateType = getMockedState();

      testState.exchange.currencies[0].amount = 100;

      getMockedState.mockRejectedValueOnce(testState);
      const component = getMountedComponent();
      const button = component.find(Button);

      expect(button.prop('disabled')).toBeFalsy();
    });
  });
});
