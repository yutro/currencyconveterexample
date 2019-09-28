import { useDispatch } from 'react-redux';
import { flipExchange } from '../../pages/Exchange/ExchangeActions';

export const useFlipExchange = () => {
  const dispatch = useDispatch();
  const dispatchFlipExchange = () => dispatch(flipExchange());

  return { dispatchFlipExchange };
};
