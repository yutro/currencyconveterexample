import { Typography } from '@material-ui/core';
import { TabPanel } from './TabPanel';
import { mount } from 'enzyme';
import React from 'react';

describe('TabPanel', () => {
  const component = mount(
    <TabPanel index={0} value={1}>
      <span>testChild</span>
    </TabPanel>
  );

  it('should contain Typography', () => {
    expect(component.find(Typography)).toHaveLength(1);
  });

  it('should contain child element', () => {
    expect(component.find('span')).toHaveLength(1);
    expect(component.find('span').text()).toBe('testChild');
  });
});
