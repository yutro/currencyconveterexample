import React, { ChangeEvent } from 'react';

export const useTabSwitcher = () => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  const switchTab = (event: ChangeEvent<{}>, newValue: number): void =>
    setActiveTabIndex(newValue);

  return { activeTabIndex, switchTab };
};
