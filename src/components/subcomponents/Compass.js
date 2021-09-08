import React from 'react';
import Compass from 'react-compass';
// import 'react-compass/dist/react-compass.css';

export function CompassComponent(props) {

    return (
        <Compass direction={props.direction} />
    );
}