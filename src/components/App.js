import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import Main from './Main';
import Technology from './Technology';
import Table from './Table';
import Guarantees from './Guarantees';
import About from './About';
import Contacts from './Contacts';
import Error from "./Error";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Main />} />
        <Route
          path="/technology"
          element={<Technology />} />
        <Route
          path="/table"
          element={<Table />} />
        <Route
          path="/guarantees"
          element={<Guarantees />} />
        <Route
          path="/about"
          element={<About />} />
        <Route
          path="/contacts"
          element={<Contacts />} />
        <Route
          path="/error"
          element={<Error/>} />
        <Route
          path="*"
          element={<Navigate to='/error'/>} />
      </Routes>                                            
    </div>
  );
}

export default App;
