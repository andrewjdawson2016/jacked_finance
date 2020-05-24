import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline } from '@material-ui/core';
import { createStore } from 'redux';
import counter from './store/reducers';
import Counter from './components/Counter'


// Next Tasks
// 1. Make this use react-redux in counter
// 2. Refactor this to use redux toolkit
// 3. At that point I will have a decent working redux project
// 4. Make a backend call and just display contents of API call in component
// 5. Parse API call and generate tiles
// 6. Then on the suggest page I want a form that I can use to add a new tile (just to confirm that works)
// 7. Submit code review for Derek to check

const store = createStore(counter);
const rootEl = document.getElementById('root');
store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });

const render = () => {
  console.log("calling render");
  return ReactDOM.render(
    <Counter
      state={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />, rootEl
  )
}

render();
store.subscribe(render);

// ReactDOM.render(
//   <React.StrictMode>
//     <CssBaseline />
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );