import './styles/Home.css';
import WarcraftLogo from '../assets/logo-warcraft.png';
import React, { useState } from 'react';
import HordeCrest from '../components/HordeCrest';
import AllianceCrest from '../components/AllianceCrest';

function Home () {
        const[title, setTitle] = useState('Choose your Faction');

        return(
            <div className="general-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-12" style={{padding: '0px'}}>
                            <div className="warcraft-logo">
                                <img className="img-fluid" src={WarcraftLogo} alt="Warcraft Logo"></img>
                            </div>
                            <div className="main-title">
                                <h1 className="warcraft-font">{title}</h1>
                            </div>
                            <HordeCrest faction="horde" title={setTitle} />
                            <AllianceCrest faction="alliance" title={setTitle} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Home;