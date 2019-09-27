import React, { ReactElement } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { TabPanel } from '../TabPanel/TabPanel';
import { Pocket } from '../../pages/Pocket/Pocket';
import { Exchange } from '../../pages/Exchange/Exchange';
import { useTabSwitcher } from './LayoutHandlers';

export const AppLayout = (): ReactElement => {
  const { activeTabIndex, switchTab } = useTabSwitcher();

  return (
    <div style={{ margin: '0 auto', maxWidth: '480px' }}>
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
      {activeTabIndex ? (
        <TabPanel value={activeTabIndex} index={1}>
          <Exchange />
        </TabPanel>
      ) : (
        <TabPanel value={activeTabIndex} index={0}>
          <Pocket />
        </TabPanel>
      )}
    </div>
  );
};
