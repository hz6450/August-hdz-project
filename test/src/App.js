import React from 'react';
import './App.css';
import Login from './login';
import Register from './register';
import SearchEngine from './SearchEngine';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/SearchEngine" element={<SearchEngine />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
