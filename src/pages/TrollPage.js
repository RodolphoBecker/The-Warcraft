import './styles/RacePages.css'
import React, {useState} from 'react';
import MainBackground from '../assets/background-internal-troll.jpg';
import MainCharacter from '../assets/image-troll-character.png';
import PageRaceBackground from '../assets/background-troll.jpg';
import HomeZoneImage from '../assets/background-echo-isles.jpg';
import HomeCityImage from '../assets/background-darkspear.jpg';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import RacesCrestList from '../components/RacesCrestList';

const TrollPage = () => {
    const[pageIndex] = useState(2);

    return(
        <React.Fragment>
        <div style={{ backgroundColor: "#141215" }}>
            <section id="main-section" className="internal-full-pages main-section" style={{ backgroundImage: `url(${MainBackground})`, overflow: 'hidden' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="internal-title">Troll</h1>
                            <h2 className="internal-subtitle">You come get da Voodoo</h2>
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
                                <h1>Mystical Conspirators</h1>
                            </div>
                            <div className="content main-text">
                                <p>The savage trolls of Azeroth are infamous for their cruelty, dark mysticism, and seething hatred for all other races. Yet one exception among the trolls is the Darkspear tribe. Plagued by a history of subservience and exile, this proud tribe was on the brink of extinction when Warchief Thrall and his mighty Horde forces were driven to the trolls’ remote island home in the South Seas during a violent storm.</p>
                            </div>
                            <div className="stylized-title horde-title">
                                <h1>Troll History</h1>
                            </div>
                            <div className="content main-text">
                                <p>The Darkspear trolls, led by wise Sen'jin, abandoned their prejudices and bravely fought side by side with the Horde to defeat a group of humans encroaching on their jungle isle. However, the Darkspears were soon driven from the island by a frenzied band of murlocs intent on appeasing a mysterious sea witch. In the frenzy, Sen’jin was slain. Thrall welcomed the Darkspears into the Horde and gave them a new home along the coastline of Durotar; the Echo Isles. But misfortune struck again; the witch doctor Zalazane betrayed his fellow tribespeople, enslaving them as mindless servants and forcing the Darkspears to fight for their new home.  Following the Horde’s victory against the Lich King in Northrend, Vol’jin allied with the ancestral loa—powerful spirits worshipped by the trolls—and secured victory over the Echo Isles. When the brash orc Garrosh was named warchief and openly showed his disdain for the Darkspear, many disillusioned trolls abandoned the Horde capital, Orgrimmar. Garrosh’s betrayals and crimes against the other Horde races led to his deposition at the hands of Thrall, who named Vol’jin as the new warchief. Vol’jin’s reign as warchief was marked by conflict. In the aftermath of Garrosh's deposition, the treacherous orc colluded with a rogue member of the Bronze Dragonflight to open a portal to a past Draenor, where he helped a newly forming Iron Horde stage an assault on Azeroth. Vol'jin led the Darkspear and the Horde through the Dark Portal, ending this threat. Unbeknownst to them, the warlock Gul'dan escaped to Azeroth, intent on opening the ancient Tomb of Sargeras to allow the Burning Legion to invade Azeroth. At the brutal Battle for Broken Shore, Vol'jin was mortally wounded. Though he was hailed as a hero, his loss was a terrible blow to the Darkspear. Since Vol’jin’s death, the trolls’ deserved place within the Horde has only strengthened, and they stand ready to face anything that might threaten it.</p>
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
                                <h1>Home Zone - Echo Isles</h1>
                            </div>
                            <div className="content main-text">
                                <p>The Echo Isles are a small cluster of tropical landmasses located near the arid coast of Durotar. In addition to being the home of the Darkspear trolls, the archipelago teems with raptors, tigers, and other dangerous predators. Yet the hostile wildlife is the least of the tribe’s worries. Although the Darkspears have liberated the Echo Isles from Zalazane, a mysterious sea witch has recently appeared and begun using her dark sorcery to destroy the trolls’ way of life. Additionally, naga have overtaken territory just north of Darkspear Isle, the seat of power for the tribe. Having been exiles throughout their history, the Darkspears are prepared to make any sacrifice in order to protect their home. Even now, a new generation of fearless trolls is training on Darkspear Isle, ready to give its lives for the future of the tribe.</p>
                            </div>
                            <img className="img-fluid mt-5 mb-5" src={HomeZoneImage} alt={HomeZoneImage}></img>
                            <div className="stylized-title horde-title">
                                <h1>Home City - Darkspear Isle</h1>
                            </div>
                            <div className="content main-text">
                                <p>Ever since defeating the traitorous witch doctor Zalazane, the Darkspear tribe has worked tirelessly to fortify their home on Darkspear Isle. Covered in a network of huts and bridges, this jungle island has become a symbol of the tribe’s glory, albeit at a time when the trolls’ destiny remains uncertain due to the shocking loss of their leader, Vol'jin. Regardless, the Darkspear tribe has vowed to stand firm and face whatever challenges lie ahead.</p>
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

export default TrollPage;