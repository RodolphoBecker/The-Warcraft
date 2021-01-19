import './styles/RacePages.css'
import React, {useState, useEffect} from 'react';
import MainBackground from '../assets/background-internal-orc.jpg';
import MainCharacter from '../assets/image-orc-character.png';
import PageRaceBackground from '../assets/background-orc.jpg';
import HomeZoneImage from '../assets/background-durotar.jpg';
import HomeCityImage from '../assets/background-orgrimmar.jpg';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import RacesCrestList from '../components/RacesCrestList';

const OrcPage = () => {
    const[pageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return(
        <div style={{ backgroundColor: "#250a03" }}>
            <section id="main-section" className="internal-full-pages main-section" style={{ backgroundImage: `url(${MainBackground})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="internal-title">Orc</h1>
                            <h2 className="internal-subtitle">Lok-Narash!</h2>
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
                                <h1>Fierce Conquerors</h1>
                            </div>
                            <div className="content main-text">
                                <p>Unlike the other races of the Horde, orcs are not native to Azeroth. Initially, they lived as shamanic clans on the lush world of Draenor. They abandoned their peaceful culture when Kil’jaeden, a demon lord of the Burning Legion, corrupted the orcs and used them in his vengeful plot against the draenei, who were exiles from Kil’jaeden’s homeworld.</p>
                            </div>
                            <div className="stylized-title horde-title">
                                <h1>Orc History</h1>
                            </div>
                            <div className="content main-text">
                                <p>Kil’jaeden’s plan worked. The orcs drank the blood of Mannoroth—a prominent Burning Legion general—infusing them with power and enslaving them to the Legion. Exposure to fel energies turned their naturally brown skin into a sickly green. Under the demon’s influence, the orcs killed off most of the draenei population, but Kil’jaeden would not stop there. With the orcs at their disposal, the Burning Legion planned to invade Azeroth once again. To this end, the corrupted human archmage Medivh conspired with the orc warlock Gul’dan to build the Dark Portal, a massive structure that would allow the orcs passage to Azeroth. Arriving in Azeroth, the seemingly unstoppable orc armies, known as the Horde, crushed the human kingdom of Stormwind. Eventually, however, the humans made a last stand and were able to defeat the Horde and enslave most of the survivors. But a young slave named Thrall, together with Warchief Orgrim Doomhammer, fought to free the captive orcs. Orgrim died in battle, and the title of warchief, as well as Orgrim’s weapon, the Doomhammer, was passed onto Thrall. Thrall led his people to Kalimdor, where his friend and mentor, Grommash Hellscream, gave his life to defeat Mannoroth and forever free the orcs from the Legion’s control. Years later, Thrall returned to Draenor, now known as Outland, to once again stop the Legion. There, he convinced Garrosh, son of Grommash Hellscream, to join the Horde. Thrall believed that Garrosh would be a clear choice for his successor, but as he learned eventually, the orcs would need more than a lone leader figure to endure. After years of long wars and bloodshed, Thrall and the orcs of Orgrimmar ultimately found a new way to rule—the creation of a council in which all members of the Horde have equal representation—and are once more hopeful for their future on Azeroth.</p>
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
                                <h1>Home Zone - Durotar</h1>
                            </div>
                            <div className="content main-text">
                                <p>The dry, harsh land of Durotar is home to some of the toughest creatures on Azeroth. Unwary travelers may fall prey to venomous scorpids, ferocious crocolisks, or angry quilboar. Thrall chose to settle this inhospitable area after the Third War as penance for the orcs’ past transgressions. He named the land after his father, Durotan, former chieftain of the Frostwolf clan. Following the Cataclysm, many of the orcish settlements were flooded or destroyed, and the Northwatch soldiers at Tiragarde Keep have become more aggressive than ever. As relations worsen between the Alliance and the Horde, it is essential that the orcs contain these threats swiftly to ensure the survival of their people.</p>
                            </div>
                            <img className="img-fluid mt-5 mb-5" src={HomeZoneImage} alt={HomeZoneImage}></img>
                            <div className="stylized-title horde-title">
                                <h1>Home City - Orgrimmar</h1>
                            </div>
                            <div className="content main-text">
                                <p>Named for the former Horde warchief Orgrim Doomhammer, this capital was rapidly constructed when the orcs first settled in Durotar. Garrosh Hellscream has recently rebuilt most of the city’s architecture, and now Orgrimmar’s fortresses rank among the most imposing on Azeroth. Spiked metal towers line the city’s streets, and the red-and-black banners of the Horde wave from every post. Most of the various races have separated into their own districts, from the tauren in the Valley of Wisdom to the trolls in the Valley of Spirits. Grommash Hold towers over all else, allowing Garrosh Hellscream to keep a close watch on his people.</p>
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
    );
}

export default OrcPage;