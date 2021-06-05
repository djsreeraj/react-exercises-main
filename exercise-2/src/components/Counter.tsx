import { FC } from "react";
import "./Counter.css";
import { observer } from "mobx-react";
import store from "./CounterStore";

const Counter: FC = () => {
  return (
    <div className="counter">
      <h1 className="counter__clicks">Clicks: {store.count}</h1>

      <div className="counter__buttons">
        <button data-testid="button-increment" onClick={store.increment}>
          Increment
        </button>

        <button data-testid="button-decrement" onClick={store.decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default observer(Counter);
