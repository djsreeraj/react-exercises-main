import { FC } from 'react';
import './Counter.css';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import store from './store';

const CounterControls : FC = () => {
    return(
        <div className="counter__buttons">
            <button onClick={action(() => (store.count+= 1))}>  Increment </button>
            <button onClick={action(() =>  (store.count-= 1))}>  Decrement </button>                
        </div>
    )
}

const CounterObserver = observer(CounterControls)

const Counter : FC = () => {
    return (
        <div className="counter">

            <h1 className="counter__clicks">
                Clicks: {store.count}
            </h1>

            <CounterControls />
            
        </div>
    )
}

export default observer(Counter);