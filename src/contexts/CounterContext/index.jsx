import P from 'prop-types';
import { useReducer, useRef } from 'react';
import { buildActions } from './actions';
import { CounterContext } from './context';
import { initialState } from './data';
import { reducer } from './reducer';

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return (
    <CounterContext.Provider value={[state, actions.current]}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: P.node.isRequired,
};
