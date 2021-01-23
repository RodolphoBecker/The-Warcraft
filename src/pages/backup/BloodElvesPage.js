import './styles/RacePages.css'
import React, {useState, useEffect} from 'react';
import MainBackground from '../assets/background-internal-blood-elf.jpg';
import MainCharacter from '../assets/image-blood-elf-character.png';
import PageRaceBackground from '../assets/background-blood-elf.jpg';
import HomeZoneImage from '../assets/background-eversong-woods.jpg';
import HomeCityImage from '../assets/background-silvermoon.jpg';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import RacesCrestList from '../components/RacesCrestList';

const BloodElvesPage = () => {
    const[pageIndex] = useState(4);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return(
        <React.Fragment>
        <div style={{ backgroundColor: "#1a0907" }}>
            <section id="main-section" className="internal-full-pages main-section" style={{ backgroundImage: `url(${MainBackground})`, overflow: 'hidden' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="internal-title">Blood Elf</h1>
                            <h2 className="internal-subtitle">Anu'belore Dela'na</h2>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <img className="" alt={MainCharacter} src={MainCharacter}></img>
                        </div>
                    </div>
                    <div className="stylized-divider bottom-divider" style={{backgroundImage: `url(${StylizedDivider})`}}></div>
                </div>
            </section>
            <section id="aboutRace" className="internal-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="stylized-title horde-title">
                                <h1>Vengeful Outsiders</h1>
                            </div>
                            <div className="content main-text">
                                <p>For nearly 7,000 years, high elven society centered on the sacred Sunwell, a magical fount that was created using a vial of pure arcane energy from the first Well of Eternity. Nourished and strengthened by the Sunwell’s potent energies, the high elves’ enchanted kingdom of Quel’Thalas prospered within the verdant forests north of Lordaeron.</p>
                            </div>
                            <div className="stylized-title horde-title">
                                <h1>Blood Elf History</h1>
                            </div>
                            <div className="content main-text">
                                <p>During the Third War, however, the high elves were nearly scoured from Azeroth. Led by the death knight Arthas, a Scourge army stormed into Quel’Thalas, slaughtering almost ninety percent of the kingdom’s population. Arthas then used the mystical Sunwell to resurrect the fallen necromancer Kel’Thuzad, irrevocably tainting the fount in the process. Fearing that the befouled well would obliterate his dwindling race, Prince Kael’thas Sunstrider gathered a group of Quel’Thalas’s defenders and destroyed the fount to avert catastrophe. Although the high elves were spared from continued exposure to the Sunwell’s dark energies, in the fount’s absence they suffered terribly from withdrawal. As a result, Kael’thas desperately searched for a means to help his people—whom he had renamed the blood elves—and thus he set out for the shattered world of Outland. There he allied with the renegade demon Illidan Stormrage in the hopes of finding a cure for the blood elves’ crippling withdrawal. Kael’thas had assured his people that one day he would return to Quel’Thalas and lead them to paradise, yet time revealed that his promises were nothing more than lies. On Outland, the prince became twisted due to his reliance on fel energy, the dark and corrupting essence wielded by the demonic Burning Legion itself. Unbeknownst to Illidan, Kael’thas also came under the sway of the Legion’s commander, Kil’jaeden. At the bidding of his new master, the wayward prince eventually returned to Azeroth and seized the site of the Sunwell, hoping to use the fount as a means to usher Kil’jaeden into the world. Ultimately, Kael’thas was slain before his recklessness could bring ruin to Azeroth. In the wake of Kil’jaeden’s defeat, the draenei prophet Velen purified the Sunwell with the Light-infused heart of a fallen naaru, transforming the fount into a source of both holy and arcane energies. Inspired by the Sunwell’s rebirth, the blood elves have since entered into a shining new era in their ancient race’s history. Although some elves remain hesitant to abandon their dependence on arcane magic, others have embraced change for the betterment of Quel’Thalas. Yet only time will tell if the blood elves can avoid repeating the tragic mistakes of their past.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ position: 'relative' }}>
                <div className="background-section" style={{ backgroundImage: `url(${PageRaceBackground})` }}></div>
                <div className="header-divider" style={{ backgroundImage: `url(${SectionDivider})` }}></div>
            </div>
            <section id="home-land" className="internal-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="stylized-title horde-title">
                                <h1>Home Zone - Eversong Woods</h1>
                            </div>
                            <div className="content main-text">
                                <p>The blood elves have called the resplendent Eversong Woods home for millennia, but the stewardship of this forested region has not been without its perils. Bent on harnessing the elves’ mystical Sunwell, Prince Arthas and the Scourge carved a path of destruction through the heart of Quel’Thalas during the Third War, leaving a tainted scar across Eversong Woods. Thus far the elves have worked extensively to drive the lingering undead from their lands and cleanse the wounds of Arthas’s assault, but the task is far from over. As Quel’Thalas looks toward a new future, ensuring the safety and wellbeing of Eversong will be a critical first step.</p>
                            </div>
                            <img className="img-fluid mt-5 mb-5" src={HomeZoneImage} alt={HomeZoneImage}></img>
                            <div className="stylized-title horde-title">
                                <h1>Home City - Silvermoon City</h1>
                            </div>
                            <div className="content main-text">
                                <p>Less than a decade ago, the wondrous high elven capital of Silvermoon was nearly destroyed during a brutal Scourge invasion. Under the command of Prince Arthas, the undead ravaged the city and went on to corrupt the sacred waters of the Sunwell. Despite this horrific event, the high elves—now known as the blood elves—have labored to rebuild their ruined capital. Most recently, the rebirth of the Sunwell has lifted spirits among the elves, and they have continued to heal Silvermoon’s scars in the hopes of returning the crown jewel of Quel’Thalas to its former glory.</p>
                            </div>
                            <img className="img-fluid mt-5 mb-5" src={HomeCityImage} alt={HomeCityImage}></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="race-list">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="stylized-title horde-title">
                                <h1>More Horde Races</h1>
                            </div>
                        </div>
                        <div className="content w-100 d-flex flex-wrap">
                            <RacesCrestList racePage={pageIndex} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </React.Fragment>
    );
}

export default BloodElvesPage;