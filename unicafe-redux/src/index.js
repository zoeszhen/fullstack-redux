import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const increment = (type) => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  return (
    <div>
      <button onClick={() => increment('GOOD')}>good</button>
      <button onClick={() => increment('OK')}>neutral</button>
      <button onClick={() => increment('BAD')}>bad</button>
      <button onClick={() => increment('RESET')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral</div>
      <div>bad</div>
    </div >
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
