import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner'
import Breakfast from './Component/Breakfast/Breakfast';
import Lunch from './Component/Lunch/Lunch';
import Dinner from './Component/Dinner/Dinner';
import BreakfastDetails from './Component/BreakfastDetails/BreakfastDetails';
import DinnerDetails from './Component/DinnerDetails/DinnerDetails';


function App() {
  return (
    <div>
      
      <Router>
            <Header></Header>
            <Banner></Banner>
        <Switch>
          <Route exact path="/">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route  path="/dinner/:foodkey">
            <DinnerDetails></DinnerDetails>
          </Route>
          <Route path="/breakfastDetails/:foodkey">
            <BreakfastDetails></BreakfastDetails>
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
