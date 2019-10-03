import { useDispatch } from 'react-redux';
import {
  flipExchange,
  FlipExchangeReturnType
} from '../../pages/Exchange/ExchangeActions';

export const useFlipExchange = () => {
  const dispatch = useDispatch();
  const dispatchFlipExchange = (): FlipExchangeReturnType =>
    dispatch(flipExchange());

  return { dispatchFlipExchange };
};
