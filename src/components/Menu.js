import React from "react";
import { RiTempColdFill, RiTimeFill } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { useHistory } from "react-router-dom";
import './Menu.scss';
import './Menu.css';

function Menu() {
    const history = useHistory();

    return (
        <div className="Menu">
            <h1>SETTINGS</h1>
            <h5 className='mt-3'>
                Welcome Back!
            </h5>

            <section className='mt-5'>
                <div className='container-setting' onClick={()=>{history.push('/home')}}>
                    <FaHome />
                    <div className='icon-text'>Home</div>
                </div>
                <div className='hairline'></div>
                <div className='container-setting' onClick={()=>history.push('/change-location')}>
                    <TiLocation />
                    <div className='icon-text'>Manage Location</div>
                </div>
                <div className='hairline mb-5'></div>
            </section>

            <section>
                <h4>UNIT SETTING</h4>
                <div className='container-unit-setting mt-3'>
                    <div className='unit-content'>
                        <RiTempColdFill />
                        <div className='icon-text'>Temperature</div>
                    </div>
                    <div className="toggle">
                        <input type="radio" name="sizeBy" value="Celsius" id="Celsius" defaultChecked />
                        <label htmlFor="Celsius">°C</label>
                        <input type="radio" name="sizeBy" value="Fahrenheit" id="Fahrenheit" />
                        <label htmlFor="Fahrenheit">°F</label>
                    </div>
                </div>
                <div className='hairline'></div>
                <div className='container-unit-setting'>
                    <div className='unit-content'>
                        <RiTimeFill />
                        <div className='icon-text'>Time Format</div>
                    </div>
                    <div className="wrapper">
                        <div className="switchToggle">
                            <input type="checkbox" id="switch1" />
                            <label htmlFor="switch1">Toggle</label>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Menu;
