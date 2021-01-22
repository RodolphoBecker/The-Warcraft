import './styles/About.css';
import React, {useEffect} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import RacesCrestList from '../components/RacesCrestList';
import RolesCrestList from '../components/RolesCrestList';
import MainBackground from '../assets/background-alliance-human.jpg';
import AllianceColor from '../assets/background-alliance-theme.jpg';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import StandardBackground from '../assets/background-standard-brown.jpg';
import AllianceBackground from '../assets/background-alliance-page-01.jpg';
// import TitleDecoration from '../assets/image-title-under.png';

const AboutAlliance = (props) => {

    useEffect(() => {
        props.layoutPage('Alliance');
    });

    return(
        <ReactFullpage
            //fullpage options
            scrollingSpeed = {1000} /* Options here */
            navigation = {true}
    
            render={({ state, fullpageApi }) => {                
                return (
                    <ReactFullpage.Wrapper>
                        <div id="" className="section main-section" style={{ backgroundImage: `url(${MainBackground})`, backgroundColor: "#162c57" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-12">
                                        <h1 className="internal-title">Stand Together<br></br>For the Alliance</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="stylized-divider bottom-divider" style={{backgroundImage: `url(${StylizedDivider})`}}></div>
                        </div>
                        <div id="about" className="section" style={{ backgroundImage: `url(${StandardBackground})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-4">
                                        <div className="stylized-title alliance-title">
                                            <h1>About the Alliance</h1>
                                            {/* <div className="title-decoration" style={{ backgroundImage: `url(${TitleDecoration})` }}></div> */}
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-12">
                                        <div className="content main-text w-100 d-flex">
                                            <p>The Alliance is one of two major political factions of the mortal races in Azeroth, its counterpart being the Horde which the Alliance has traditionally been at war with. Driven by tradition, the Alliance consists of powerful cultures and groups bound not by desperation or necessity, but by their deep commitments to abstract concepts like nobility, honor, faith, justice, and sacrifice. Striving to represent these high ideals, its many different peoples all contribute their technical, arcane, and spiritual wisdom toward the shared goal of preserving order on Azeroth and creating a peaceful and just world.</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-divider" style={{ backgroundImage: `url(${SectionDivider})` }}></div>
                        </div>
                        <div id="races" className="section" style={{ backgroundImage: `url(${AllianceColor})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-12">
                                        <div className="stylized-title alliance-title">
                                            <h1>Races</h1>
                                            {/* <div className="title-decoration" style={{ backgroundImage: `url(${TitleDecoration})` }}></div> */}
                                        </div>
                                    </div>
                                    <div className="content w-100 d-flex flex-wrap">
                                        <RacesCrestList races="Alliance" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section background-section" style={{ backgroundImage: `url(${AllianceBackground})` }}>
                            <div className="stylized-divider bottom-divider" style={{backgroundImage: `url(${StylizedDivider})`}}></div>
                        </div>
                        <div id="roles" className="section" style={{ backgroundImage: `url(${AllianceColor})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-12">
                                        <div className="stylized-title alliance-title">
                                            <h1>Classes</h1>
                                        </div>
                                    </div>
                                    <div className="content w-100 d-flex flex-wrap">
                                        <RolesCrestList />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}
export default AboutAlliance;

