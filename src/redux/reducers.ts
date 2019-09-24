import { combineReducers } from 'redux';
import { PocketStateType} from '../pages/Pocket/PocketTypes';
import { pockets } from '../pages/Pocket/pocketReducer';
import { exchange } from '../pages/Exchange/exchangeReducer';
import { ExchangeType } from '../pages/Exchange/exchangeTypes';

export type AppStateType = {
  pockets: PocketStateType;
  exchange: ExchangeType;
};

export default combineReducers({ pockets, exchange });
