import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./app/store";
import LoginContainer from "./app/login/container/LoginContainer";
import AlertContainer from "./app/common/alert/container/AlertContainer";

const App = () => {
  return (
    <Provider store={store}>
      <LoginContainer/>
      <AlertContainer/>
    </Provider>
  );
};

export default App;
