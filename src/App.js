import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Displaycard from './components/Displaycard';
import Compareproject from './components/Compareproject';
import SetState from './components/context/SetState';
import './App.css'

const App = () => {
  return (
    <div>
      <SetState>
        <Router>
          {/* <Alert alert={alert} /> */}
          <Routes>
            <Route index element={<Login />} />
            <Route exact path="/display" element={<Displaycard />} />
            <Route exact path="/compare" element={<Compareproject />} />
          </Routes>
        </Router>
      </SetState>
    </div>
  )
}

export default App
