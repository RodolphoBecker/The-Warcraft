import './styles/RacePages.css'
import React from 'react';
import MainBackground from '../assets/background-internal-orc.jpg';
import MainCharacter from '../assets/image-orc-character.png';

const OrcPage = () => {
    return(
        <React.Fragment>
            <div className="internal-full-pages main-section" style={{ backgroundImage: `url(${MainBackground})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="internal-title">Orc</h1>
                            <h2 className="internal-subtitle">Lok-Narash!</h2>
                        </div>
                        <div className="col-12 col-lg-6">
                            <img className="img-fluid" alt={MainCharacter} src={MainCharacter}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutRace internal-section" style={{ backgroundColor: "#250a03" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <h1>About Race</h1>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default OrcPage;