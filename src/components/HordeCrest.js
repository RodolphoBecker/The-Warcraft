import './styles/Crest.css';
import WarcraftButton from '../components/WarcrafButton';
import HordeColor from '../assets/background-horde-theme.jpg';
import CrestHorde from '../assets/crest-horde.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HordeCrest = (props) => {
    const[factionText, setFactionText] = useState('Horde');
    const[size, setSize] = useState('normalSize');
    const[buttonShow, setButtonShow] = useState('hide');
    const[zIndex, setZIndex] = useState(0);

    const hordeSelected = (event) => {
        setSize('fullSize');
        setFactionText('Blood and thunder, champions of the Horde!');
        setButtonShow('');
        setZIndex(1);
        props.title('For the Horde!');
    }

    const hordeUnselected = (event) => {
        setSize('normalSize');
        setFactionText('Horde');
        setButtonShow('hide');
        setZIndex(0);
        props.title('Choose your Faction');
    }

    return(
        <div className={`sides ${size} ${props.faction}`} style={{ backgroundImage:`url(${HordeColor})`, zIndex:zIndex}} >
            <div className="crest">
                <button className="crestButton" onClick={() => hordeSelected()}>
                    <img src={CrestHorde} alt=""></img>
                    <h1 className="warcraft-font">{factionText}</h1>
                </button>
            </div>
            <div className="navigation d-flex">
                <Link to='/about/horde'>
                    <WarcraftButton buttonText="About" buttonShow={buttonShow} faction="Horde" />
                </Link>
                <WarcraftButton buttonText="Back"  backFunction={true} buttonBack={() => hordeUnselected()} buttonShow={buttonShow} />
            </div>
        </div>
    );  
}

export default HordeCrest;