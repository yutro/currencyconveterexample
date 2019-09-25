import React from 'react';
import { useDispatch } from 'react-redux';
import { Fab } from '@material-ui/core';
import { Cached as IconCached } from '@material-ui/icons';

export const FlipExchange = () => {
  const dispatch = useDispatch();

  return (
    <Fab
      color="primary"
      size="small"
      aria-label="flip-exchange"
      onClick={(): void => {
        dispatch({ type: 'FLIP_EXCHANGE' });
      }}
    >
      <IconCached />
    </Fab>
  );
};
