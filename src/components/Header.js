import './styles/Header.css';
import React, {} from 'react';
import HeaderBackground from '../assets/background-headerMenu.jpg';
import { Link } from 'react-router-dom';
import HeaderDivider from '../assets/image-column-divisor-02.png';

const Header = (props) => {

    // useEffect(() => {
    //     const headerId = document.getElementById('header').offsetHeight;
    //     props.headerHeight(headerId);
    // },[]);
    
    return(
        <div id="header" className="headerComponent" style={{ backgroundImage: `url(${HeaderBackground})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="logo-link default-hover d-flex justify-content-between">
                            <Link to="/">
                                <img className="img-fluid" alt="Warcraft Icon" src={props.hordeLogo}></img>
                            </Link>
                            <div className="navigation"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-divider" style={{ backgroundImage: `url(${HeaderDivider})` }}></div>
        </div>
    );
}

export default Header;