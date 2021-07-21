import './App.css';
import React from 'react';
import PaisesCards from './modules/paisesCards';
import { Route } from 'react-router-dom'
import WelcomePage from './modules/welcome/Welcome';
import addActivity from './modules/formActivity/formAct'
import DetailCountry from './modules/details/detailCountry';
import NavBar from './modules/navBar/navBar';

function App() {
  return (
    <>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/app" component={NavBar} />
      <Route exact path="/app/countries" component={PaisesCards} />
      <Route exact path="/app/activity" component={addActivity} />
      <Route exact path="/app/countries/:id" component={DetailCountry} />
    </>
  );
}

export default App;
