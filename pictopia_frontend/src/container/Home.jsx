import React, {useState, useRef, useEffect} from 'react';
import {HiMenu} from 'react-icons/hi';
import {AiFillCloseCircle} from 'react-icons/ai';
import {Link, Route, Routes } from 'react-router-dom';

// import Sidebar from "../components/Sidebar";
// import UserProfile from "../components/UserProfile";
import { Sidebar, UserProfile } from '../components';
import {client} from "../client";
import logo from "../assets/logo.png";

import Pins from "./Pins";



const Home = () => {
  const [toggleSidebar, settoggleSidebar] = useState(false)



  return (
    <div className='flex bg-gray-50 md:flex-row flex flex-col h-screen transition-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar />
      </div>
      <div className="flex md:hidden flex-row">
        <HiMenu fontSize={40} className='cursor-pointer' onClick={() => setToggleSidebar(false)}/>
      </div>
    </div>
  )
}

export default Home