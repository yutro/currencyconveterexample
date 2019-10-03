import configureMockStore, { MockStore } from 'redux-mock-store';
import { getMockedState } from './mocks/appState';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import React from 'react';

export const getMountedComponent = (
  Component: Function,
  componentOwnProps = null
): {
  component: ReactWrapper;
  store: MockStore;
} => {
  const mockStore = configureMockStore();
  const store = mockStore(getMockedState());
  const component = mount(
    <Provider store={store}>
      <Component {...componentOwnProps} />
    </Provider>
  );

  return { component, store };
};
