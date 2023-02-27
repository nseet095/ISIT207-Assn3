import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Adopt from './pages/adopt';
import PutUp from './pages/putup';
import SignUp from './pages/signup';
import SignupForm from './pages/adopt-form'
import Response from './pages/response'
import Donate from './pages/donate'
import Thanks from './pages/thanks'

function App() {
return (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/adopt' element={<Adopt/>} />
        <Route path='/put-up' element={<PutUp/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/adopt-form' element={<SignupForm/>} />
        <Route path='/response' element={<Response />} />
        <Route path='/donate' element={< Donate/>} />
        <Route path='/thanks' element={< Thanks/>} />

      </Routes>
    </Router>
  </>
);
}

export default App;
