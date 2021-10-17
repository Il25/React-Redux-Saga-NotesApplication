import React from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './components/header';
import Home from './screens/home';
import Notes from './screens/notes';

function App() {
  return (
    <div className="main_app_container"> 
    <Header/>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/notes" component={Notes} />
    </Switch>
  </div>  
  );
};

export default App;
