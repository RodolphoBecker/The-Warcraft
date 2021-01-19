import './styles/RolePages.css'
import React, {useState, useEffect} from 'react';
import MainBackground from '../assets/roles/background-internal-deathKnight.jpg';
import MainCharacter from '../assets/roles/image-DeathKnight-character.png';
import PageRaceBackground from '../assets/roles/background-deathKnight.jpg';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import RolesCrestList from '../components/RolesCrestList';

const WarriorPage = () => {
    const[pageIndex] = useState(11);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const weapons = [ 'Axes', 'Maces', 'Swords', 'Polearms']

    const mappedWeapons = weapons.map((weapon) => {
        return(
            <li>{weapon}</li>
        );
    });
    console.log(pageIndex)

    return(
        <div style={{ backgroundColor: "#05131c" }}>
            <section id="main-section" className="internal-full-pages main-section" style={{ backgroundImage: `url(${MainBackground})`, overflow: 'hidden' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="internal-title">Death Knight</h1>
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
                                <h1>Heralds of Doom</h1>
                            </div>
                            <div className="content main-text">
                                <p>When the Lich King’s control over his death knights was broken, his former champions found their new purpose as Knights of the Ebon Blade. After Bolvar Fordragon donned the helm to keep the undead Scourge contained, he called forth a new generation of death knights to join the Ebon Blade's cause.</p>
                            </div>
                            <div className="stylized-title horde-title">
                                <h1>Class Information</h1>
                            </div>
                            <div className="content main-text">
                                <p>Death Knights engage their foes up-close, supplementing swings of their weapons with dark magic that renders enemies vulnerable or damages them with unholy power. They drag foes into one-on-one conflicts, compelling them to focus their attacks away from weaker companions. To prevent their enemies from fleeing their grasp, death knights must remain mindful of the power they call forth from runes, and pace their attacks appropriately.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="stylized-title horde-title">
                                <h1>Armor Type</h1>
                            </div>
                            <div className="content main-text">
                                <ul>
                                    <li>Plate</li>
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