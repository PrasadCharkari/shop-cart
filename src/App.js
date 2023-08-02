import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Toaster } from "react-hot-toast";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
         
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Toaster/>
      </Router>
    
    </div>
  );
}

export default App;
