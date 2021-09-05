import React, { useContext } from 'react';
import { MenuContext } from "react-flexible-sliding-menu";
import './Navbar.css'

export default function Navbar() {
    const { toggleMenu } = useContext(MenuContext);

    return (
        <div className="navbar">
            <div className="menu">
                <div className="hamburger-menu">
                    <label htmlFor="check" className='ham-label'>
                        <input type="checkbox" id="check" onClick={toggleMenu} className='ham-input' />
                        <span className='ham-span'></span>
                        <span className='ham-span'></span>
                        <span className='ham-span'></span>
                    </label>
                </div>
                <h3 className="logo">Coding<span>Beast</span></h3>
            </div>
        </div>
    )
}