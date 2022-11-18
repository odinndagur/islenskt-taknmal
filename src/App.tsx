import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { HashRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

import './App.css'

import Homepage from './components/Homepage'
import Collection from './components/Collection';

function Lolz() {
  return (
    <h1>lolz</h1>
  )
}



function App() {
  return (
    <div className="homepage">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/lolz" element={<Lolz/>}></Route>
          <Route path="/collections/:collection" element={<Collection/>}></Route>

        </Routes>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/lolz">Lolz</Link>
          </nav>
      </Router>
    </div>
  )
}

export default App
