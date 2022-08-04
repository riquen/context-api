import { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContext/context';

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (typeof context === 'undefined') {
    throw new Error(
      'You have to use useCounterContext inside <CounterProvider />',
    );
  }

  return [...context];
};
