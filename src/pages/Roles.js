import './styles/About.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RolesCrestList from '../components/RolesCrestList';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';

const Roles = ({roles, selectedRole}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const weapons = roles[selectedRole].weapons;
    const armor = roles[selectedRole].armor;
    
    const mappedWeapons = weapons.map((weapon)=>{
        return(
            <React.Fragment>
                <li>{weapon}</li>
            </React.Fragment>
        )
    });

    const mappedArmor = armor.map((armor) => {
        return(
            <React.Fragment>
                <li>{armor}</li>
            </React.Fragment>
        )
    });

    return(
        <div style={{ backgroundColor: `${roles[selectedRole].color}` }}>
            <section id="main-section" className="internal-full-pages main-section" style={{ backgroundImage: `url(${roles[selectedRole].mainBackground})`, overflow: 'hidden' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="internal-title">{roles[selectedRole].name}</h1>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <img className="" alt={roles[selectedRole].mainCharacterImage} src={roles[selectedRole].mainCharacterImage}></img>
                        </div>
                    </div>
                    <div className="stylized-divider bottom-divider" style={{backgroundImage: `url(${StylizedDivider})`}}></div>
                </div>
            </section>
            <section id="aboutRole" className="internal-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="stylized-title horde-title">
                                <h1>{roles[selectedRole].title}</h1>
                            </div>
                            <div className="content main-text">
                                <p>{roles[selectedRole].description}</p>
                            </div>
                            <div className="stylized-title horde-title">
                                <h1>Class Information</h1>
                            </div>
                            <div className="content main-text">
                                <p>{roles[selectedRole].information}</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="stylized-title horde-title">
                                <h1>Armor Type</h1>
                            </div>
                            <div className="content main-text">
                                <ul>
                                    {mappedArmor}
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="stylized-title horde-title">
                                <h1>Avaible Weapons</h1>
                            </div>
                            <div className="content main-text">
                                <ul>
                                    {mappedWeapons}
                                </ul>
                            </div>
                        </div>   
                    </div>
                </div>
            </section>
            <div style={{ position: 'relative' }}>
                <div className="background-section" style={{ backgroundImage: `url(${roles[selectedRole].pageBackground})` }}></div>
                <div className="header-divider" style={{ backgroundImage: `url(${SectionDivider})` }}></div>
            </div>
            <section id="race-list" style={{ marginTop: '100px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="stylized-title horde-title">
                                <h1>More Classes</h1>
                            </div>
                        </div>
                        <div className="content w-100 d-flex flex-wrap">
                            <RolesCrestList pageIndex={roles[selectedRole].id} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { roles:state.roles, selectedRole: state.selectedRole }
}

export default connect(mapStateToProps, {})(Roles)