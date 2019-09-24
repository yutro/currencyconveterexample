import React, { ReactNode } from 'react';
import { Box, Typography } from '@material-ui/core';

type TabPanelPropsType = {
  children?: ReactNode;
  index: number;
  value: number;
};

export const TabPanel = (props: TabPanelPropsType) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};
