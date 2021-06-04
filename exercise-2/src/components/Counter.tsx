import { FC } from 'react';
import './Counter.css';

const Counter : FC = () => {
    return (
        <div className="counter">

            <h1 className="counter__clicks">
                Clicks: 1
            </h1>

            <div className="counter__buttons">
                <button>  Increment </button>
                <button>  Decrement </button>
                
            </div>
            
        </div>
    )
}

export default Counter;