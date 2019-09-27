import { AppLayout } from './AppLayout';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { getMountedComponent } from '../../tests/utils';
import { Exchange } from '../../pages/Exchange/Exchange';
import { Pocket } from '../../pages/Pocket/Pocket';

describe('AppLayout', () => {
  const { component } = getMountedComponent(AppLayout);

  it('should contain AppBar', () => {
    expect(component.find(AppBar)).toHaveLength(1);
  });

  it('should contain 2 tabs', () => {
    expect(component.find(Tab)).toHaveLength(2);
  });

  it('should render only Pocket tab content on mount', () => {
    expect(component.find(Pocket)).toHaveLength(1);
    expect(component.find(Exchange)).toHaveLength(0);
  });

  it('should render only Exchange tab content after it selected', () => {
    const tabSelect = component
      .find(Tabs)
      .find(Tab)
      .last();

    tabSelect.simulate('click');

    expect(tabSelect.prop('id')).toBe('simple-tab-2');
    expect(component.find(Exchange)).toHaveLength(1);
    expect(component.find(Pocket)).toHaveLength(0);
  });
});
