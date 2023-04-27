import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Displaycard from './components/Displaycard';
import DataFetching from './components/context/DataFetching';
import Compareproject from './components/Compareproject';
import './App.css'

const App = () => {
  return (
    <div>
      <DataFetching>
        <Router>
          {/* <Alert alert={alert} /> */}
          <Routes>
            <Route index element={<Login />} />
            <Route exact path="/display" element={<Displaycard />} />
            <Route exact path="/compare" element={<Compareproject />} />
          </Routes>
        </Router>
      </DataFetching>
    </div>
  )
}

export default App
