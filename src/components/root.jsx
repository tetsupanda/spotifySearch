import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import {reducers} from '../reducers';

import {Container} from './container';
import '../app.css';

let store = createStore(
  reducers,
  applyMiddleware(reduxThunk),
);

class Root extends React.Component {
  render () {
    return(
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}
export default Root;