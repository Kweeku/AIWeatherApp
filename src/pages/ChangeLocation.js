import React from 'react';
import Navbar from '../components/subcomponents/Navbar';
import { useHistory } from "react-router-dom";
import './ChangeLocation.scss'

export default function ChangeLocation() {
    const history = useHistory();
    return (
        <div className='body-app'>
            <Navbar />

            <div className='container-location'>
                <div class="form-group">
                    <span>Longitude</span>
                    <input className="form-field" type="text" placeholder="longitude" />
                </div>

                <div class="form-group">
                    <input className="form-field" type="text" placeholder="latitude" />
                    <span>Latitude</span>
                </div>

                <button onClick={() => history.push('/home')} className="primary-button mt-5">
                    Click me!
                </button>
            </div>

        </div>
    )
}