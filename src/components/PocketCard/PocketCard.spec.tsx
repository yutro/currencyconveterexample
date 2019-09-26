import React from 'react';
import { mount } from 'enzyme';
import { PocketCard } from './PocketCard';

describe('PocketCard', () => {
  const component = mount(<PocketCard currency="USD" amount={10} />);

  it('should mount without errors', () => {
    expect(component).toHaveLength(1);
  });

  it('should contain currency name', () => {
    expect(component.text()).toContain('USD');
  });

  it('should contain currency amount', () => {
    expect(component.text()).toContain('10');
  });
});
