import './styles/About.css';
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import MainBackground from '../assets/background-horde-orc.jpg';
import StylizedDivider from '../assets/image-column-divisor.png';
import StandardBackground from '../assets/background-standard-brown.jpg';
import TitleDecoration from '../assets/image-title-under.png';

const AboutHorde = () => {
    return(
        <ReactFullpage
            //fullpage options
            scrollingSpeed = {1000} /* Options here */
            navigation = {true}
    
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div id="" className="section internal-full-pages" style={{ backgroundImage: `url(${MainBackground})` }}>
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
                                            <h1>Sobre a Horda</h1>
                                            <div className="title-decoration" style={{ backgroundImage: `url(${TitleDecoration})` }}></div>
                                        </div>
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

