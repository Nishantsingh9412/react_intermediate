import { Routes ,Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import React, {  useEffect, useState } from "react";


function App() {

  const [isloggedIn,setisloggedIn] = useState(false);
  useEffect(() =>{
    console.log("Hello in App js");
    setisloggedIn(false);
  })
  
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
        <Navbar isloggedIn={isloggedIn} setisloggedIn={setisloggedIn} />
        

            <Routes>
                <Route path='/' element = {<Home />} />
                <Route path='login' element = {<Login setisloggedIn={setisloggedIn} />} />
                <Route path='signup' element = {<SignUp setisloggedIn={setisloggedIn}/>} />
                <Route path='dashboard' element = {<Dashboard/>} />
                
                {/* <Route path='' element = {} /> */}
            </Routes>
    </div>
    
    )
}

export default App;
