import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './App';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from '$redux/store';

//解决移动端300毫秒延迟
var FastClick = require('fastclick');
FastClick.attach(document.body);

import '../static/css/base.scss';
import '../static/css/font.scss';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <HashRouter basename='/'>
          <Component/>
        </HashRouter>
      </Provider>
    </AppContainer>, document.getElementById('root'))
}

render(App);

if (module.hot) {
  module
    .hot
    .accept('./App', () => render(App));
}
