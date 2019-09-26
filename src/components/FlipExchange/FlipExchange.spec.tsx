import { Fab } from '@material-ui/core';
import { getMountedComponent } from '../../tests/utils';
import { FlipExchange } from './FlipExchange';

describe('FlipExchange', () => {
  const { component, store } = getMountedComponent(FlipExchange);
  const flipButton = component.find(Fab);

  it('should contain flipIcon button', () => {
    expect(flipButton).toHaveLength(1);
  });

  it('state should fire EXCHANGE_CURRENCY data after click', () => {
    flipButton.simulate('click');

    expect(store.getActions()).toStrictEqual([{ type: 'FLIP_EXCHANGE' }]);
  });
});
