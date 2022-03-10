import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
// import './App.css';
import Home from './components/Home';
import BubblesList from './components/bubblesList';
import BubbleItem from './components/bubbleItem';
import BundlesList from './components/bundlesList';
import About from './components/about';
import Cart from './components/cart';
import PreviousOrders from './components/previousOrders';
import {BrowserRouter as Router, Routes, Route,Link, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Checkout from './components/checkout';
import {getBubblesService} from './services/bubbleService';


function App() {
 

  return (
    <Router>

    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/bubbles" element={<BubblesList/>}/>
        <Route exact path="/bubbles/:bubbleId" element={<BubbleItem/>}/>
        <Route exact path="/bundles" element={<BundlesList/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/orders/:telephone" element={<PreviousOrders/>}/>
        <Route exact path='/checkout' element={<Checkout/>} />
        

      </Routes>
    </div>
    </Router>
  );
}

export default App;
