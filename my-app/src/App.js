import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route,Link, } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
