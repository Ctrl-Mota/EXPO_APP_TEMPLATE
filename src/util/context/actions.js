import { DECREASE, INCREASE } from './types';

export const increase = coinAdd => ({ type: INCREASE, payload: coinAdd });
export const decrease = coinSub => ({ type: DECREASE, payload: coinSub });
