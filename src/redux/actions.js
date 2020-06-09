import { INCREMENT, DECREMENT } from './constants';

export const increment = (id, product) => ({
  type: INCREMENT,
  payload: { [id]: product },
});
export const decrement = (id, name, price) => ({
  type: DECREMENT,
  payload: { id, name, price },
});
