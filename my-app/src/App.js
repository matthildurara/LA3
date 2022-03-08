import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
// import './App.css';
import Home from './components/Home';
import BubblesList from './components/bubblesList'
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

      </Routes>
    </div>
    </Router>
  );
}

export default App;
