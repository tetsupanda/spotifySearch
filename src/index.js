import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotReloader } from 'react-hot-loader'
import Root from './components/root';

ReactDOM.render(
  <HotReloader>
    <Root />
  </HotReloader>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/root', () => { ReactDOM.render(Root) })
}