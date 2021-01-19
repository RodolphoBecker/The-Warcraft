import './styles/RacePages.css'
import React, {useState, useEffect} from 'react';
import MainBackground from '../assets/background-internal-tauren.jpg';
import MainCharacter from '../assets/image-tauren-character.png';
import PageRaceBackground from '../assets/background-tauren.jpg';
import HomeZoneImage from '../assets/background-mulgore.jpg';
import HomeCityImage from '../assets/background-thunderbluff.jpg';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import RacesCrestList from '../components/RacesCrestList';

const TaurenPage = () => {
    const[pageIndex] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return(
        <React.Fragment>
        <div style={{ backgroundColor: "#250a03" }}>
            <section id="main-section" className="internal-full-pages main-section" style={{ backgroundImage: `url(${MainBackground})`, overflow: 'hidden' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="internal-title">Tauren</h1>
                            <h2 className="internal-subtitle">Walk with the Earth Mother</h2>
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
                                <h1>Honorable Conservationists</h1>
                            </div>
                            <div className="content main-text">
                                <p>The peaceful tauren—known in their own tongue as the shu’halo—have long dwelled in Kalimdor, striving to preserve the balance of nature at the behest of their goddess, the Earth Mother. Until recently, the tauren lived as nomads scattered throughout the Barrens, hunting the great kodo beasts native to the arid region.</p>
                            </div>
                            <div className="stylized-title horde-title">
                                <h1>Tauren History</h1>
                            </div>
                            <div className="content main-text">
                                <p>During the Third War, the mighty tauren chieftain Cairne Bloodhoof had a chance encounter with the orcish Horde that explored Kalimdor. After befriending Warchief Thrall, Cairne and his tribe were able to fend off their enemies while they made a new home in Mulgore; the city of Thunder Bluff. Owing a debt to the orcs for their assistance, the tauren joined Thrall on Mount Hyjal to defend Kalimdor from the demons of the Burning Legion. For years the tauren flourished throughout Mulgore, but tragedy befell them following the campaign against the Lich King in Northrend. Believing that the reckless new warchief, Garrosh Hellscream, would lead the Horde to ruin, Cairne challenged the young orc to a duel. The tauren chieftain clearly had the upper hand... However, unbeknownst to either of the duel’s combatants, Magatha Grimtotem, a tauren matriarch who harbored great contempt for Cairne, had poisoned Garrosh’s blade. The poison paralyzed Cairne, and Garrosh was able to slay him. Magatha’s followers then stormed Thunder Bluff in an attempt to seize it. However, Baine, Cairne’s son, managed to launch a counterattack and retake the tauren capital, banishing Magatha and her followers from tauren lands. Despite the deadly encounter between Cairne and Garrosh, the tauren have not abandoned the Horde. Baine bravely took up the mantle of tauren leadership, and the Highmountain tauren have established a foothold on the growing Legion corruption near the Broken Isles.</p>
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
                                <h1>Home Zone - Mulgore</h1>
                            </div>
                            <div className="content main-text">
                                <p>After settling in the grasslands of Mulgore, the mighty tauren established the stunning capital of Thunder Bluff. For years afterward the tauren lived amid central Kalimdor’s serene plains, tending to the well-being of their beloved new home. Yet the recent Cataclysm has had disastrous effects on Mulgore. Driven from their dens south of Thunder Bluff, the barbaric quilboar have swarmed across Red Cloud Mesa, encroaching on Camp Narache. Apart from taking numerous tauren captive, the quilboar have caused giant thorned roots to burst from the ground, choking all life from the once-verdant plains. In light of this, the tauren have vowed to drive away the savage creatures and heal the wounds inflicted upon the land before the damage becomes irreparable.</p>
                            </div>
                            <img className="img-fluid mt-5 mb-5" src={HomeZoneImage} alt={HomeZoneImage}></img>
                            <div className="stylized-title horde-title">
                                <h1>Home City - Thunder Bluff</h1>
                            </div>
                            <div className="content main-text">
                                <p>Established by the wise chieftain Cairne Bloodhoof and his stalwart tribe, Thunder Bluff overlooks the verdant land of Mulgore from atop a series of windswept mesas. Prior to the construction of the capital, the tauren had lived as nomads for countless generations, often under attack by marauding bands of centaur. With Thunder Bluff’s founding, however, the proud and good-spirited race was finally granted a permanent home.Following Cairne’s death in a duel with Warchief Garrosh Hellscream, Thunder Bluff was briefly seized in a coup by Magatha Grimtotem and elements of her tribe. In retaliation, Cairne’s son, Baine, launched a brilliant counterattack using a fleet of zeppelins. After he strategically divided Magatha’s forces, Baine recaptured Thunder Bluff and assumed his role as the high chieftain of the tauren. Having recovered from the recent unrest, the capital is once again a bastion of peace and security for Kalimdor’s tauren.</p>
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

export default TaurenPage;