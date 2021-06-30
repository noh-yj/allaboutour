import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import Main from '../pages/Main';
import MyInfo from '../pages/MyInfo';
import YourInfo from '../pages/YourInfo';
import Result from '../pages/Result';

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={Main} />
        <Route path='/myProfile' exact component={MyInfo} />
        <Route path='/yourProfile' exact component={YourInfo} />
        <Route path='/result' exact component={Result} />
      </ConnectedRouter>
    </>
  );
}

export default App;
