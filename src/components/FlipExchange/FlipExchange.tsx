import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { Fab } from '@material-ui/core';
import { Cached as IconCached } from '@material-ui/icons';

type PropsType = Readonly<{
  className?: string;
}>;

export const FlipExchange = (props: PropsType): ReactNode => {
  const dispatch = useDispatch();

  return (
    <Fab
      {...props}
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
