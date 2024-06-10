import React,{useState} from 'react'
import { BsFillCartFill } from "react-icons/bs"
import { FaSearch } from "react-icons/fa";
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import './Navbar2.css'

export default function Navbar2() {
    const [inputtrue,setinputtrue]=useState(false);
    const [text]=useTypewriter(
        {
          words:['Management System'],
          loop:{},
          typeSpeed:80,
          delaySpeed:1000,
        }
      );
  return (
    <>
      <header>
                <div className='header'>
                    <div className="logo">
                        <img src="../Images/logo.png" alt="My Pic" />
                    </div>
                    <div className="heading">
                       <h2> <span>Restaurant</span> {text} <Cursor/></h2>
                    </div>
                    <div className="icons">
                        <div className="search-icon" onClick={()=>setinputtrue(!inputtrue)}><FaSearch/></div>
                        <div className="cart"><BsFillCartFill /></div>
                    </div>
                    <div className={inputtrue?'search-bar active':'search-bar non-active'}>
                        <input type="text" placeholder='Search Here...'/>
                        <div className="search-icon"><FaSearch/></div>
                    </div>
                </div>
            </header>
    </>
  )
}
