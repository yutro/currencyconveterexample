import React, { ChangeEvent } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { TabPanel } from '../TabPanel/TabPanel';
import { Pocket } from '../../pages/Pocket/Pocket';
import { Exchange } from '../../pages/Exchange/Exchange';

export const AppLayout = () => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  const switchTab = (event: ChangeEvent<{}>, newValue: number): void =>
    setActiveTabIndex(newValue);

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto' }}>
      <AppBar position="static">
        <Tabs
          value={activeTabIndex}
          onChange={switchTab}
          aria-label="simple tabs example"
        >
          <Tab label="Pocket" id="simple-tab-1" />
          <Tab label="Exchange" id="simple-tab-2" />
        </Tabs>
      </AppBar>
      <TabPanel value={activeTabIndex} index={0}>
        <Pocket />
      </TabPanel>
      <TabPanel value={activeTabIndex} index={1}>
        <Exchange />
      </TabPanel>
    </div>
  );
};
