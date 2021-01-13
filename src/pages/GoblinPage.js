import './styles/RacePages.css'
import React, {useState} from 'react';
import MainBackground from '../assets/background-internal-goblin.jpg';
import MainCharacter from '../assets/image-goblin-character.png';
import PageRaceBackground from '../assets/background-goblin.jpg';
import HomeZoneImage from '../assets/background-mulgore.jpg';
import HomeCityImage from '../assets/background-thunderbluff.jpg';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import RacesCrestList from '../components/RacesCrestList';

const BloodElvesPage = () => {
    const[pageIndex] = useState(5);

    return(
        <React.Fragment>
        <div style={{ backgroundColor: "#0b1308" }}>
            <section id="main-section" className="internal-full-pages main-section" style={{ backgroundImage: `url(${MainBackground})`, overflow: 'hidden' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="internal-title">Goblin</h1>
                            <h2 className="internal-subtitle">Time is money, friend!</h2>
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
                                <h1>Covetous Schemers</h1>
                            </div>
                            <div className="content main-text">
                                <p>Originally the slaves of jungle trolls on the Isle of Kezan, goblins were forced to mine kaja’mite ore out of the volcanic bowels of Mount Kajaro. The trolls used this potent mineral for their voodoo rituals, but it had an unexpected effect on the slaves who were in constant contact with it: kaja’mite generated new cunning and intelligence in the goblin race.</p>
                            </div>
                            <div className="stylized-title horde-title">
                                <h1>Goblin History</h1>
                            </div>
                            <div className="content main-text">
                                <p>Crafting powerful artifacts of engineering and alchemy in secret, the goblins soon overthrew their oppressors and claimed Kezan for their homeland. The mines that had once been the goblins’ prison,   and  slave camp became the city of Undermine. It was there that they built the foundations of an empire, and honed their inherent craftiness (some would call it duplicity) to a razor edge. The goblins’ inventions would help them rule the world—or at least own a profitable percentage of it. To the goblins’ dismay, the effects of the kaja’mite began to wear off, and their intelligence waned. Even worse, the ore itself became more scarce. Supplies dwindled. Desperation ensued… The goblins’ once-brilliant inventions started to look haphazard and makeshift, and Kezan’s native swindlers realized that they would need to find other ways to supplement their avarice. The goblins’ remaining craftiness and greed soon lifted the race to preeminence as masters of mercantilism.  Great fortunes were amassed, and the Isle of Kezan became a hub for goblin trading ships. One ambitious trade prince agreed to lend his cartel’s services to the Horde in the Second War. Following the Horde’s defeat, the goblins realized that their profits could double if they weren’t stuck in a restrictive relationship. By the end of the Third War, goblins were providing services to both the Horde and the Alliance. Recently, the Bilgewater Cartel—the goblin faction based in Orgrimmar and Azshara—has found a new enemy in the Alliance. Unprofitable encounters with the secretive SI:7 branch of King Varian’s forces have driven Trade Prince Gallywix from comfortable neutrality. Reforging old pacts with their colleagues’ one-time allies, the goblins of the Bilgewater Cartel have been welcomed into the Horde.</p>
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