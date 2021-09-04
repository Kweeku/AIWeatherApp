import React, {useState, useContext}from "react";
import  { getAyoba }  from './microapp'
import {getMsisdn} from './ayobastub';
import { MenuContext } from "react-flexible-sliding-menu";
import WeatherComponent from "./components/Weather";
import "./App.css";

function App() {

  const [phone, setPhone] = useState('');
  const { toggleMenu } = useContext(MenuContext);

  const sayHello = () => {

   
    let ayoba = getAyoba() ; 
    // setPhone(ayoba.getMsisdn());
    setPhone(getMsisdn());

  } 

  return (
    <div className="App body-app">
      <div className="navbar">
        <div className="menu">
          <div className="hamburger-menu">
            <label htmlFor="check" className='ham-label'>
              <input type="checkbox" id="check" onClick={toggleMenu} className='ham-input'/>
              <span className='ham-span'></span>
              <span className='ham-span'></span>
              <span className='ham-span'></span>
            </label>
          </div>
          <h3 className="logo">Coding<span>Beast</span></h3>
        </div>
      </div>

      <div className='main-body'>
        <WeatherComponent />
        <div>
          <h1>Hello React</h1>
          <p>MSISDN : {phone}</p>
          <button onClick={sayHello} className="primary-button">
            Click me!
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
