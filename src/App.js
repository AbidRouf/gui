import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage';

const App = () => {
  return (
    <Router>
      <HomePage />
    </Router>
  );
};


export default App;
