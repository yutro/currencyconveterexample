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

  return { component, store };
};

describe('ConvertButton', () => {
  afterEach(() => {
    getMockedState.mockClear();
  });

  describe('button', () => {
    const { component } = getMountedComponent();
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
      const { component } = getMountedComponent();
      const button = component.find(Button);

      expect(button.prop('disabled')).toBeFalsy();
    });

    it('should contain enabled Button when base pocket exists & exchange amount exists & exchange amount === pocket amount', () => {
      const testState: AppStateType = getMockedState();

      testState.exchange.currencies[0].amount = 100;

      getMockedState.mockRejectedValueOnce(testState);
      const { component } = getMountedComponent();
      const button = component.find(Button);

      expect(button.prop('disabled')).toBeFalsy();
    });

    describe('onClick handler', () => {
      const testState: AppStateType = getMockedState();

      it('should not be called on mount', () => {
        testState.exchange.currencies[0].amount = 50;

        getMockedState.mockReturnValue(testState);
        const { store } = getMountedComponent();

        expect(store.getActions()).toStrictEqual([]);
      });

      it('should be called after click with proper actions', () => {
        testState.exchange.currencies[0].amount = 50;

        getMockedState.mockReturnValue(testState);
        const { component, store } = getMountedComponent();
        const button = component.find(Button);

        button.simulate('click');
        component.update();

        const [firstActon, secondAction] = store.getActions();

        expect(firstActon).toStrictEqual({
          payload: { amount: 50, currency: 'USD' },
          type: 'UPDATE_BASE_POCKET'
        });
        expect(secondAction).toStrictEqual({
          payload: { amount: 0, currency: 'GBP' },
          type: 'UPDATE_TARGET_POCKET'
        });
      });
    });
  });
});
