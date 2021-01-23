import './styles/RacePages.css'
import React, {useState, useEffect} from 'react';
import MainBackground from '../assets/background-internal-goblin.jpg';
import MainCharacter from '../assets/image-goblin-character.png';
import PageRaceBackground from '../assets/background-goblin.jpg';
import HomeZoneImage from '../assets/background-kezan.jpg';
import HomeCityImage from '../assets/background-bilgewater.jpg';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import RacesCrestList from '../components/RacesCrestList';

const GoblinPage = (props) => {
    const[pageIndex] = useState(5);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

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
                                <h1>Home Zone - Kezan</h1>
                            </div>
                            <div className="content main-text">
                                <p>Thanks to Kezan’s prominence as a mercantile hub, it’s been divided into dozens of districts by the trade princes, who view every inch of land as an opportunity waiting to be converted into gold and silver. Kezan’s tropical palms are bisected with miles of roadway, and even the beaches are beginning to be paved over by goblin ambitions. Now, nature is reclaiming the island of Kezan – massive Mount Kajaro has erupted with the Cataclysm, flooding the island with searing lava and sending tidal recoil sweeping through Kezan’s harbors.</p>
                            </div>
                            <img className="img-fluid mt-5 mb-5" src={HomeZoneImage} alt={HomeZoneImage}></img>
                            <div className="stylized-title horde-title">
                                <h1>Home City - Bilgewater Harbor</h1>
                            </div>
                            <div className="content main-text">
                                <p>Following the destruction of Kezan’s port homes, many of the Bilgewater Cartel’s surviving goblins have fled for their lives, joining their new Horde comrades and settling in Azshara’s Bilgewater Harbor. The town’s origins are often speculated on by non-goblins; Bilgewater Harbor sprang up in record time after the Kezan refugees’ arrival, and its’ quintessentially goblin construction has fostered an atmosphere of debauchery and disorder. Orgrimmar’s military has only recently set boots down in Bilgewater, but the harbor’s value as a strategic front conflicts with some pushy goblins’ desire to turn it into a new version of their ancestral home (abounding with gambling dens, pleasure houses and other commercial luxuries). This cultural rift is likely to breed tension in the ranks of the Horde sooner rather than later.</p>
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

export default GoblinPage;