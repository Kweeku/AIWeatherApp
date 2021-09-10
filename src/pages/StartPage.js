import React, { useState } from "react";
import { getAyoba } from '../microapp'
import { getMsisdn } from '../ayobastub';
import Navbar from "../components/subcomponents/Navbar";
import { useHistory } from "react-router-dom";
import { AyobaStub } from "../ayobastub";
import "./StartPage.css";
import "./StartPage.scss";

function StartPage() {
    const history= useHistory();
    const [phone, setPhone] = useState('');

    const sayHello = () => {


        let ayoba = getAyoba();
        // setPhone(ayoba.getMsisdn());
        setPhone(AyobaStub.getMsisdn());
        history.push('./home')
    }

    return (
        <div className="App body-app">
            <Navbar />

            <div className='main-body'>
                <div>
                    <button onClick={sayHello} className="btn-1">
                        <h1>Get Weather Forecast for Current Location</h1>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StartPage
