import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <Router>
      <Route path='/' element={<Home />}/>
    </Router>
  )
}

export default App
