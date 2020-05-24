import React from 'react';

function Counter(props) {
  const { state, onIncrement, onDecrement } = props

  const incrementIfOdd = () => {
    if (state % 2 !== 0) {
      onIncrement()
    }
  }

  const asyncIncrement = () => {
    setTimeout(props.onIncrement, 1000)
  }

  return (
    <div>
      <span>Clicked: {state} times</span>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={incrementIfOdd}>Increment if Odd</button>
      <button onClick={asyncIncrement}>Async Update</button>
    </div>
  );
}

export default Counter;