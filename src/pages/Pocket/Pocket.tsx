import React, { FunctionComponent } from 'react';
import { PocketCard } from '../../components/PocketCard/PocketCard';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reducers';
import { PocketStateType } from './PocketTypes';

export const Pocket: FunctionComponent = () => {
  const pockets = useSelector(
    ({ pockets }: AppStateType): PocketStateType => pockets
  );

  return (
    <>
      {pockets.allIds.map(id => {
        const pocket = pockets.byId[id];

        return <PocketCard key={id} {...pocket} />;
      })}
    </>
  );
};
