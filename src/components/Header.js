import './styles/Header.css';
import React, {} from 'react';
import HeaderBackground from '../assets/background-headerMenu.jpg';
import { Link } from 'react-router-dom';
import HeaderDivider from '../assets/image-column-divisor-02.png';

const Header = (props) => {
    return(
        <React.Fragment>
            {props.headerLayout === 'Horde' ?
                <div id="header" className="headerComponent" style={{ backgroundImage: `url(${HeaderBackground})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 d-flex justify-content-center">
                                <div className="logo-link default-hover d-flex justify-content-between">
                                    <Link to="/">
                                        <img className="img-fluid" alt="Warcraft Icon" src={props.hordeLogo}></img>
                                    </Link>
                                    <div className="navigation"></div>
                                </div>
                                <div style={{ margin: 'auto 0' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-divider" style={{ backgroundImage: `url(${HeaderDivider})` }}></div>
                </div>
            :
                <div id="header" className="headerComponent" style={{ backgroundImage: `url(${HeaderBackground})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 d-flex justify-content-center">
                                <div className="logo-link default-hover d-flex justify-content-between">
                                    <Link to="/">
                                        <img className="img-fluid" alt="Warcraft Icon" src={props.allianceLogo}></img>
                                    </Link>
                                    <div className="navigation"></div>
                                </div>
                                <div style={{ margin: 'auto 0' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-divider" style={{ backgroundImage: `url(${HeaderDivider})` }}></div>
                </div>
            }
        </React.Fragment>
    );
}

export default Header;

