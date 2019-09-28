import React, { ReactElement } from 'react';
import { Fab } from '@material-ui/core';
import { Cached as IconCached } from '@material-ui/icons';
import { useFlipExchange } from './FlipExchangeHandlers';

type PropsType = Readonly<{
  className?: string;
}>;

export const FlipExchange = (props: PropsType): ReactElement => {
  const { dispatchFlipExchange } = useFlipExchange();

  return (
    <Fab
      {...props}
      color="primary"
      size="small"
      aria-label="flip-exchange"
      onClick={dispatchFlipExchange}
    >
      <IconCached />
    </Fab>
  );
};
