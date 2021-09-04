import React, {useState}from "react";
import  { getAyoba }  from './microapp'
import "./App.css" ;
import {getMsisdn} from './ayobastub';

function App() {

  const [phone, setPhone] = useState('');


  const sayHello = () => {

   
    let ayoba = getAyoba() ; 
    // setPhone(ayoba.getMsisdn());
    setPhone(getMsisdn());

  } 

  return (
    <div className="App">    
      <h1>Hello React</h1>
  <p>MSISDN : {phone}</p>
       <button onClick={sayHello}>
        
      Click me!
    </button>
      </div>
     
  )
}

export default App
