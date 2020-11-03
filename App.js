import { BrowserRouter, Link, Switch, Route, useParams } from "react-router-dom";
import React from 'react';
import {HeaderTop} from './HeaderTop.js'
import {HeaderLarge} from './HeaderLarge.js'
export function App() {
  let { id } = useParams();
  return (
    <div>
       {/* <HeaderTop/> */}
            <HeaderLarge/>
            <h1>{id}</h1>
    </div>
  );
}
