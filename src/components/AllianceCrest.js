import './styles/Crest.css';
import WarcraftButton from '../components/WarcrafButton';
import AllianceColor from '../assets/background-alliance-theme.jpg';
import CrestAlliance from '../assets/crest-alliance.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllianceCrest = (props) => {
    const[factionText, setFactionText] = useState('Alliance');
    const[size, setSize] = useState('normalSize');
    const[buttonShow, setButtonShow] = useState('hide');
    const[zIndex, setZIndex] = useState(0);

    const allianceSelected = (event) => {
        setSize('fullSize');
        setFactionText('No one is more important than the Alliance.');
        setButtonShow('');
        setZIndex(1);
        props.title('For the Alliance!');  
    }

    const allianceUnselected = (event) => {
        setSize('normalSize');
        setFactionText('Alliance');
        setButtonShow('hide');
        setZIndex(0);
        props.title('Choose your Faction');
    }

    return(
        <div className={`sides ${size} ${props.faction}`} style={{ backgroundImage:`url(${AllianceColor})`, zIndex:zIndex}} >
            <div className="crest">
                <button className="crestButton" onClick={() => allianceSelected()}>
                    <img src={CrestAlliance} alt=""></img>
                    <h1 className="warcraft-font">{factionText}</h1>
                </button>
            </div>
            <div className="navigation d-flex">
                <Link to='/about/alliance'>
                    <WarcraftButton buttonText="About" buttonShow={buttonShow} faction="Alliance" />
                </Link>
                <WarcraftButton buttonText="Back" backFunction={true} buttonBack={() => allianceUnselected()} buttonShow={buttonShow} />
            </div>
        </div>
    );  
}

export default AllianceCrest;
