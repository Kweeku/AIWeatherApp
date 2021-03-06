import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import MenuProvider from 'react-flexible-sliding-menu';
import Menu from './components/Menu';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import AppRoot from './AppRoot';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <MenuProvider MenuComponent={Menu} animation='push'>
      <AppRoot />
    </MenuProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
