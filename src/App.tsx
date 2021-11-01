import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Menus from './pages/Menus';
import Dishes from './pages/Dishes';
import DishDetail from './pages/DishDetail';
import MenuAppBar from './components/MenuAppBar';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Router>
        <Switch>
          <Route path="/menus">
            <Menus />
          </Route>
          <Route path="/dishes">
            <Dishes />
          </Route>
          <Route path="/dish-detail">
            <DishDetail />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
