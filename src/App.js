import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Register from './Components/formic';
import Csstry from './Components/csstry';
import Home from './Components/Home';
import Navbar from "./Components/Navbar.jsx"
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import AllUsers from './Components/AllUsers';
function App() {
 
  return (
    <div className="App">
    <Navbar/>
    
    <Routes>
        <Route path="/Login" element={<Form />}/>   
        <Route path="/" element={<Register />}/>
        <Route path="/users" element={<AllUsers />}/>
        
      </Routes>
     {/* <Csstry/> */}
     {/* <Home/> */}
    </div>
  );
}

export default App;
