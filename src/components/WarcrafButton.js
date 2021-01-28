import ButtonLayout from '../assets/button-layout.png';
import './styles/WarcraftButton.css'
import React from 'react';
import { selectFaction } from '../actions';
import { connect } from 'react-redux';

const WarcraftButton = (props) => {
    if(props.backFunction === true){
        return(
            <button onClick={props.buttonBack} id="warcraftButton" className={`${props.buttonShow} default-hover`} style={{ backgroundImage:`url(${ButtonLayout})` }}>{props.buttonText}</button>
        );
    } else {
        return(
            <button onClick={() => props.selectFaction(props.faction)} id="warcraftButton" className={`${props.buttonShow} default-hover`} style={{ backgroundImage:`url(${ButtonLayout})` }}>{props.buttonText}</button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectFaction: selectFaction
    }
}

export default connect(mapStateToProps, {
	selectFaction: selectFaction
})(WarcraftButton);
