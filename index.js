import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import {App} from './App';
import {Admin} from './Admin'
import {Dashboard} from './Dashboard'
ReactDOM.render(
  <BrowserRouter>
    {/* <Link to="/admin"> Админ хуудас    </Link>
  <Link to="/home">   Нүүр хуудас       </Link> */}
​
    <Switch>
      <Route exact path="/dash">
        <Dashboard />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/:id" children={<App />}/>
      <Route path="/" exact>
        <App />
      </Route>
    </Switch>
​
  </BrowserRouter>
  ,
  document.getElementById('root')
);
