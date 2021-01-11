import ButtonLayout from '../assets/button-layout.png';
import './styles/WarcraftButton.css'
import React from 'react';

const WarcraftButton = (props) => {
    return(
        <button onClick={props.buttonBack} id="warcraftButton" className={`${props.buttonShow} default-hover`} style={{ backgroundImage:`url(${ButtonLayout})` }}>{props.buttonText}</button>
    );
}

export default WarcraftButton;