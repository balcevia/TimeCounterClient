import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./app/store";
import AlertContainer from "./app/common/alert/container/AlertContainer";
import Router from "./app/common/router/Router";

const App = () => {
  return (
    <Provider store={store}>
      <Router/>
      <AlertContainer/>
    </Provider>
  );
};

export default App;
