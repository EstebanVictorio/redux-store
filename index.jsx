import React from 'react';
import ReactDOM from 'react-dom';
import Store from 'Store';
import HomeContainer from 'Container/HomeContainer';
let {subscribe,dispatch, getState} = Store;
let appContainer = document.querySelector('#app');
let App = () => ReactDOM.render(
  <HomeContainer dispatch={dispatch} getState={getState}/>,
appContainer);
subscribe(App);
App();
