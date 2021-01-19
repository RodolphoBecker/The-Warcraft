import './styles/About.css';
import React, {useEffect} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import RacesCrestList from '../components/RacesCrestList';
import RolesCrestList from '../components/RolesCrestList';
import MainBackground from '../assets/background-horde-orc.jpg';
import HordeColor from '../assets/background-horde-theme.jpg';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import StandardBackground from '../assets/background-standard-brown.jpg';
import HordeBackground from '../assets/background-horde-page-01.jpg';
// import TitleDecoration from '../assets/image-title-under.png';

const AboutHorde = (props) => {

    useEffect(() => {
        props.layoutPage('Horde');
    });

    return(
        <ReactFullpage
            //fullpage options
            scrollingSpeed = {1000} /* Options here */
            navigation = {true}
    
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div id="" className="section main-section" style={{ backgroundImage: `url(${MainBackground})`, backgroundColor: "#8C1616" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-12">
                                        <h1 className="internal-title">Lok'Tar Ogar!<br></br>For the Horde</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="stylized-divider bottom-divider" style={{backgroundImage: `url(${StylizedDivider})`}}></div>
                        </div>
                        <div id="about" className="section" style={{ backgroundImage: `url(${StandardBackground})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-3">
                                        <div className="stylized-title horde-title">
                                            <h1>About the Horde</h1>
                                            {/* <div className="title-decoration" style={{ backgroundImage: `url(${TitleDecoration})` }}></div> */}
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-12">
                                        <div className="content main-text w-100 d-flex">
                                            <p>The Horde is one of the two major political factions of the mortal races in Azeroth, its counterpart being the Alliance which the Horde has traditionally been at war with. Driven by unity, the Horde consists of a coalition of disparate races and cultures loosely joined in an alliance of convenience against a hostile world that would see them destroyed. A faction led by off-worlders and composed of outsiders, the Horde has survived the obstacles of Azeroth by bonding together, fighting as family, comrades, or even uneasy allies. Focused, ferocious, and sometimes monstrous, the Horde values strength and honor and is relentlessly opposed to any who threaten the ideals of freedom and hope, but struggles to keep aggression in check.</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-divider" style={{ backgroundImage: `url(${SectionDivider})` }}></div>
                        </div>
                        <div id="races" className="section" style={{ backgroundImage: `url(${HordeColor})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-12">
                                        <div className="stylized-title horde-title">
                                            <h1>Races</h1>
                                            {/* <div className="title-decoration" style={{ backgroundImage: `url(${TitleDecoration})` }}></div> */}
                                        </div>
                                    </div>
                                    <div className="content w-100 d-flex flex-wrap">
                                        <RacesCrestList races="Horde" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section background-section" style={{ backgroundImage: `url(${HordeBackground})` }}>
                            <div className="stylized-divider bottom-divider" style={{backgroundImage: `url(${StylizedDivider})`}}></div>
                        </div>
                        <div id="roles" className="section" style={{ backgroundImage: `url(${HordeColor})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-12">
                                        <div className="stylized-title horde-title">
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
export default AboutHorde;

