import React from "react";
import './Menu.scss';

function Menu() {
    return (
        <div className="Menu">
            <h1>Menu</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
                eligendi provident.
            </p>

            <ul className='ul-comp'>
                <li className='li-comp'><a href="#!" className='a-comp'>home</a></li>
                <li className='li-comp'><a href="#!" className='a-comp'>archives</a></li>
                <li className='li-comp'><a href="#!" className='a-comp'>tags</a></li>
                <li className='li-comp'><a href="#!" className='a-comp'>categories</a></li>
                <li className='li-comp'><a href="#!" className='a-comp'>about</a></li>
            </ul>
        </div>
    );
}

export default Menu;
