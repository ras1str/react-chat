import { Routes, Route, Link } from 'react-router-dom';
import clasess from './App.module.css'
import React from "react";
import Chat from "./components/Chat/Chat";
import Nomad from "./components/Nomad/Nomad";
import SideBar from './components/SideBar/SideBar';



function App() {

  let Auth = false 
  return (

  
      <div className={clasess.wrapper}>
     <Nomad id="navbar"/>
     <Chat id="chat"/>
     <SideBar/>
    </div> 
    
   
  );
}

export default App;
