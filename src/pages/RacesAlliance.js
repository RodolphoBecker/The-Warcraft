import './styles/RacePages.css';
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import RacesCrestList from '../components/RacesCrestList';

const RacesAlliance = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    const[factionSelected] = useState(props.allianceRaces[props.selectedRace].faction);
    
    return(
        <div style={{ backgroundColor: `${props.allianceRaces[props.selectedRace].color}` }}>
            <section id="main-section" className="internal-full-pages main-section" style={{ backgroundImage: `url(${props.allianceRaces[props.selectedRace].mainBackground})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="internal-title">{props.allianceRaces[props.selectedRace].name}</h1>
                            <h2 className="internal-subtitle">{props.allianceRaces[props.selectedRace].quote}</h2>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <img className="" alt={props.allianceRaces[props.selectedRace].mainCharacter} src={props.allianceRaces[props.selectedRace].mainCharacter}></img>
                        </div>
                    </div>
                    <div className="stylized-divider bottom-divider" style={{backgroundImage: `url(${StylizedDivider})`}}></div>
                </div>
            </section>
            <section id="aboutRace" className="internal-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="stylized-title alliance-title">
                                <h1>{props.allianceRaces[props.selectedRace].title}</h1>
                            </div>
                            <div className="content main-text">
                                <p>{props.allianceRaces[props.selectedRace].description}</p>
                            </div>
                            <div className="stylized-title alliance-title">
                                <h1>{`${props.allianceRaces[props.selectedRace].name} History`}</h1>
                            </div>
                            <div className="content main-text">
                                <p>{props.allianceRaces[props.selectedRace].history}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ position: 'relative' }}>
                <div className="background-section" style={{ backgroundImage: `url(${props.allianceRaces[props.selectedRace].pageRaceBackground})` }}></div>
                <div className="header-divider" style={{ backgroundImage: `url(${SectionDivider})` }}></div>
            </div>
            <section id="home-land" className="internal-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="stylized-title alliance-title">
                                <h1>Home Zone - {props.allianceRaces[props.selectedRace].zone}</h1>
                            </div>
                            <div className="content main-text">
                                <p>{props.allianceRaces[props.selectedRace].zoneDescription}</p>
                            </div>
                            <img className="img-fluid mt-5 mb-5" src={props.allianceRaces[props.selectedRace].homeZoneImage} alt={props.allianceRaces[props.selectedRace].homeZoneImage}></img>
                            <div className="stylized-title alliance-title">
                                <h1>Home City - {props.allianceRaces[props.selectedRace].city}</h1>
                            </div>
                            <div className="content main-text">
                                <p>{props.allianceRaces[props.selectedRace].cityDescription}</p>
                            </div>
                            <img className="img-fluid mt-5 mb-5" src={props.allianceRaces[props.selectedRace].homeCityImage} alt={props.allianceRaces[props.selectedRace].homeCityImage}></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="race-list">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="stylized-title alliance-title">
                                <h1>More Alliance Races</h1>
                            </div>
                        </div>
                        <div className="content w-100 d-flex flex-wrap">
                            <RacesCrestList races={factionSelected} pageId={props.allianceRaces[props.selectedRace].id} />
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {allianceRaces: state.allianceRaces, selectedRace: state.selectedRace }
}

export default connect(mapStateToProps, {})(RacesAlliance)