import * as types from './types';

export const buildActions = (dispatch) => {
  return {
    increaseCounter: () => dispatch({ type: types.INCREASE_COUNTER }),
    asyncIncreaseStart: () => asyncIncreaseStartFn(dispatch),
    asyncIncreaseError: () => asyncIncreaseErrorFn(dispatch),

    decreaseCounter: () => dispatch({ type: types.DECREASE_COUNTER }),
    asyncDecreaseStart: () => asyncDecreaseStartFn(dispatch),
    asyncDecreaseError: () => asyncDecreaseErrorFn(dispatch),

    resetCounter: () => dispatch({ type: types.RESET_COUNTER }),
    setCounter: (payload) => dispatch({ type: types.SET_COUNTER, payload }),
  };
};

const asyncIncreaseStartFn = async (dispatch) => {
  dispatch({ type: types.ASYNC_INCREASE_START });

  return await new Promise((resolve) =>
    setTimeout(() => {
      dispatch({ type: types.ASYNC_INCREASE_END });
      resolve('RESOLVED');
    }, 2000),
  );
};

const asyncIncreaseErrorFn = async (dispatch) => {
  dispatch({ type: types.ASYNC_INCREASE_START });

  return await new Promise((resolve, reject) =>
    setTimeout(() => {
      dispatch({ type: types.ASYNC_INCREASE_ERROR });
      reject(new Error('REJECTED'));
    }, 2000),
  );
};

const asyncDecreaseStartFn = async (dispatch) => {
  dispatch({ type: types.ASYNC_DECREASE_START });

  return await new Promise((resolve) =>
    setTimeout(() => {
      dispatch({ type: types.ASYNC_DECREASE_END });
      resolve('RESOLVED');
    }, 2000),
  );
};

const asyncDecreaseErrorFn = async (dispatch) => {
  dispatch({ type: types.ASYNC_DECREASE_START });

  return await new Promise((resolve, reject) =>
    setTimeout(() => {
      dispatch({ type: types.ASYNC_DECREASE_ERROR });
      reject(new Error('REJECTED'));
    }, 2000),
  );
};
