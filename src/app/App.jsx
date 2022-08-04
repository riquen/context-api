import './App.css';
import { useCounterContext } from '../hooks/useCounterContext';
import { Button } from '../components/Button';
import { Header } from '../components/Header';

function App() {
  const [state, actions] = useCounterContext();

  const handleIncreaseError = () => {
    actions
      .asyncIncreaseError()
      .then((r) => console.log(r))
      .catch((e) => console.log(`${e.name}: ${e.message}`));
  };

  const handleDecreaseError = () => {
    actions
      .asyncDecreaseError()
      .then((r) => console.log(r))
      .catch((e) => console.log(`${e.name}: ${e.message}`));
  };

  return (
    <div className="App">
      <Header>{state.counter}</Header>

      <div>
        <Button onClick={actions.increaseCounter}>Increase</Button>
        <Button disabled={state.loading} onClick={actions.asyncIncreaseStart}>
          Async Increase
        </Button>
        <Button disabled={state.loading} onClick={handleIncreaseError}>
          Async Increase Error
        </Button>

        <Button onClick={actions.decreaseCounter}>Decrease</Button>
        <Button disabled={state.loading} onClick={actions.asyncDecreaseStart}>
          Async Decrease
        </Button>
        <Button disabled={state.loading} onClick={handleDecreaseError}>
          Async Decrease Error
        </Button>

        <Button onClick={actions.resetCounter}>Reset</Button>
        <Button onClick={() => actions.setCounter({ counter: 10 })}>
          Set 10
        </Button>
        <Button onClick={() => actions.setCounter({ counter: 100 })}>
          Set 100
        </Button>
      </div>
    </div>
  );
}

export default App;
