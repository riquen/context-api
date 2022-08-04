import * as types from './types';
import { initialState } from './data';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case types.ASYNC_INCREASE_START:
      return { ...state, loading: true };
    case types.ASYNC_INCREASE_END:
      return { ...state, loading: false, counter: state.counter + 1 };
    case types.ASYNC_INCREASE_ERROR:
      return { ...state, loading: false };

    case types.DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case types.ASYNC_DECREASE_START:
      return { ...state, loading: true };
    case types.ASYNC_DECREASE_END:
      return { ...state, loading: false, counter: state.counter - 1 };
    case types.ASYNC_DECREASE_ERROR:
      return { ...state, loading: false };

    case types.RESET_COUNTER:
      return { ...initialState };
    case types.SET_COUNTER:
      return { ...state, ...action.payload };
  }

  return { ...state };
};
