import './App.css';
import React, { useState, useEffect } from 'react';
import PaisesCards from './modules/paisesCards';
import { Route } from 'react-router-dom'
import WelcomePage from './modules/welcome/Welcome';
import addActivity from './modules/formActivity/formAct'
import DetailCountry from './modules/details/detailCountry';

function App() {
  return (
    <>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/countries" component={PaisesCards} />
      <Route exact path="/activity" component={addActivity} />
      <Route exact path="/countries/:id" component={DetailCountry} />
    </>
  );
}

export default App;
