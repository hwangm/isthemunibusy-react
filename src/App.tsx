import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import FeatureTest from './components/FeatureTest';
import FeatureTestVariant from './components/FeatureTestVariant';
import UserVariant from './components/UserVariant';

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/user-variants">
          <UserVariant />
        </Route>
        <Route path="/variants">
          <FeatureTestVariant />
        </Route>
        <Route path="/">
          <FeatureTest />
        </Route>
      </Switch>
    </Router>
  );
}
