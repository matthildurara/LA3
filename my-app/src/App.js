import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
// import './App.css';
import Home from './components/Home';
import BubblesList from './components/bubblesList';
import BubbleItem from './components/bubbleItem';
import BundlesList from './components/bundlesList';
import About from './components/about';
import Cart from './components/cart';
import {BrowserRouter as Router, Routes, Route,Link, } from 'react-router-dom';
import Navbar from './components/Navbar';
import {getBubblesService} from './services/bubbleService';


function App() {
  //  const dispatch = useDispatch();
  // const [bubbles, setBubbles] = useState({});
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // setBubbles(await getBubbles());
  //    dispatch(getBubbles());
  // },[dispatch]);




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

      </Routes>
    </div>
    </Router>
  );
}

export default App;
