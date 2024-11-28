import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Op from "./pages/Op";
import Card from "./components/Card";



function App() {
  
 return(
  <Router>
    <Routes>
    <Route path='/Op' element={<Op/>}/>
    <Route path='/' element={<Home/>}/>
    {/* <Route path='/card' element={<Card/>}/> */}

    </Routes>
  </Router>
 )
}

export default App