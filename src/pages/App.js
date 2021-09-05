import React, { useState} from "react";
import { getAyoba } from '../microapp'
import { getMsisdn } from '../ayobastub';
import WeatherComponent from "../components/Weather";
import Navbar from "../components/subcomponents/Navbar";
import "./App.css";

function App() {

  const [phone, setPhone] = useState('');

  const sayHello = () => {


    let ayoba = getAyoba();
    // setPhone(ayoba.getMsisdn());
    setPhone(getMsisdn());

  }

  return (
    <div className="App body-app">
      <Navbar />

      <div className='main-body'>
        <WeatherComponent />
      </div>
    </div>
  )
}

export default App
