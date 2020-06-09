import { INCREMENT, DECREMENT } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  {
    console.log(payload);
  }
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: {
          [payload.id]: (state[payload.id] || 0) + 1,
          ...payload,
        },
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: (state[payload.id] || 0) - 1,
        name: state[payload.name],
        price: state[payload.price],
      };
    default:
      return state;
  }
};
