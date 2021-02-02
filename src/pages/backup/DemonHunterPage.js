import './styles/RolePages.css'
import React, {useState, useEffect} from 'react';
import MainBackground from '../assets/roles/background-internal-demonHunter.jpg';
import MainCharacter from '../assets/roles/image-demonHunter-character.png';
import PageRaceBackground from '../assets/roles/background-demonHunter.jpg';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import RolesCrestList from '../components/RolesCrestList';

const WarriorPage = () => {
    const[pageIndex] = useState(10);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const weapons = [ 'Warglaives', 'Fist Weapons', 'One-Handed Axes', 'One-Handed Swords']

    const mappedWeapons = weapons.map((weapon) => {
        return(
            <li>{weapon}</li>
        );
    });

    return(
        <div style={{ backgroundColor: "#141c0d" }}>
            <section id="main-section" className="internal-full-pages main-section" style={{ backgroundImage: `url(${MainBackground})`, overflow: 'hidden' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="internal-title">Demon Hunter</h1>
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
                                <h1>Unforgiving Predators</h1>
                            </div>
                            <div className="content main-text">
                                <p>Demon hunters, disciples of Illidan Stormrage, uphold a dark legacy, one that frightens their allies and enemies alike. The Illidari embrace fel and chaotic magics—energies that have long threatened the world of Azeroth—believing them necessary to challenge the Burning Legion. Wielding the powers of demons they’ve slain, they develop demonic features that incite revulsion and dread in fellow elves.</p>
                            </div>
                            <div className="stylized-title horde-title">
                                <h1>Class Information</h1>
                            </div>
                            <div className="content main-text">
                                <p>Forgoing heavy armor, Demon Hunters capitalize on speed, closing the distance quickly to strike enemies with one-handed weapons. However, Illidari must also use their agility defensively to ensure that battles end favorably.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="stylized-title horde-title">
                                <h1>Armor Type</h1>
                            </div>
                            <div className="content main-text">
                                <ul>
                                    <li>Leather</li>
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