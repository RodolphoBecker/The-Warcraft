import './styles/RolePages.css'
import React, {useState, useEffect} from 'react';
import MainBackground from '../assets/roles/background-internal-monk.jpg';
import MainCharacter from '../assets/roles/image-monk-character.png';
import PageRaceBackground from '../assets/roles/background-monk.jpg';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import RolesCrestList from '../components/RolesCrestList';

const WarriorPage = () => {
    const[pageIndex] = useState(6);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const weapons = [ 'Fist Weapons', 'One-Handed Axes', 'One-Handed Maces', 'One-Handed Swords', 'Polearms', 'Staves']

    const mappedWeapons = weapons.map((weapon) => {
        return(
            <li>{weapon}</li>
        );
    });
    console.log(pageIndex)

    return(
        <div style={{ backgroundColor: "#0e1003" }}>
            <section id="main-section" className="internal-full-pages main-section" style={{ backgroundImage: `url(${MainBackground})`, overflow: 'hidden' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="internal-title">Monk</h1>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <img className="" loading="lazy" alt={MainCharacter} src={MainCharacter}></img>
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
                                <h1>Musing Brawlers</h1>
                            </div>
                            <div className="content main-text">
                                <p>When the pandaren were subjugated by the mogu centuries ago, it was the monks that brought hope to a seemingly dim future. Restricted from using weapons by their slave masters, these pandaren instead focused on harnessing their chi and learning weaponless combat. When the opportunity for revolution struck, they were well-trained to throw off the yoke of oppression.</p>
                            </div>
                            <div className="stylized-title horde-title">
                                <h1>Class Information</h1>
                            </div>
                            <div className="content main-text">
                                <p>Whatever their combat role, monks rely mainly on their hands and feet to do the talking, and on strong connection with their inner chi to power their abilities. Monks can also heal their allies while at the same time damaging their enemies.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="stylized-title horde-title">
                                <h1>Armor Type</h1>
                            </div>
                            <div className="content main-text">
                                <ul>
                                    <li>Lether</li>
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
                <div className="background-section" style={{ backgroundImage: `url(${PageRaceBackground})` }}></div>
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
                            <RolesCrestList rolePage={pageIndex} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WarriorPage;