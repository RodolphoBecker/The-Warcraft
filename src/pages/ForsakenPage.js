import './styles/RacePages.css'
import React, {useState} from 'react';
import MainBackground from '../assets/background-internal-forsaken.jpg';
import MainCharacter from '../assets/image-forsaken-character.png';
import PageRaceBackground from '../assets/background-forsaken.jpg';
import HomeZoneImage from '../assets/background-tirisfal-glades.jpg';
import HomeCityImage from '../assets/background-undercity.jpg';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import RacesCrestList from '../components/RacesCrestList';

const ForsakenPage = () => {
    const[pageIndex] = useState(3);

    return(
        <React.Fragment>
        <div style={{ backgroundColor: "#0b1017" }}>
            <section id="main-section" className="internal-full-pages main-section" style={{ backgroundImage: `url(${MainBackground})`, overflow: 'hidden' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="internal-title">Forsaken</h1>
                            <h2 className="internal-subtitle">What would you ask of death?</h2>
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
                                <h1>Cadaverous Endurers</h1>
                            </div>
                            <div className="content main-text">
                                <p>Death offered no escape for the scores of humans killed during the Lich King’s campaign to scour the living from Lordaeron. Instead, the kingdom’s fallen were risen into undeath as Scourge minions and forced to wage an unholy war against everything… and everyone… that they once held dear.</p>
                            </div>
                            <div className="stylized-title horde-title">
                                <h1>Forsaken History</h1>
                            </div>
                            <div className="content main-text">
                                <p>When the Lich King’s grasp on his vast armies faltered after the Third War, a contingent of undead broke free of their master’s iron will. This freedom seemed like a blessing, but the former humans were soon tormented by memories of the horrors they had committed as mindless Scourge. Those who did not descend into madness faced a chilling realization: the entirety of Azeroth sought their destruction. In their darkest hour, the renegade undead were rallied by Sylvanas Windrunner, former Ranger-General of Quel’thalas, who had also regained her freedom from the Lich King. Under their new queen’s guidance, the independent undead—known as Forsaken—established the Undercity beneath the ruins of Lordaeron. To further her own goals and protect her budding nation, Sylvanas set out to forge alliances. Chief among these were the tauren of Thunder Bluff, who saw the potential for redemption in the Forsaken. Thus, the tauren convinced then-Warchief Thrall to forge an alliance of convenience between the Forsaken and the Horde. The Forsaken assisted the Horde with a massive offensive against the Lich King and exacted vengeance upon their hated enemy. The victory came at great cost; Grand Apothecary Putress betrayed the Forsaken, unleashing a new plague that decimated friend and foe alike, while the dreadlord Varimathras seized the Undercity in a coup that nearly killed Sylvanas. The usurpers were eventually slain and the Forsaken capital was restored, but the debacle created suspicion among the Horde regarding Sylvanas’ ability to lead and ensure the loyalty of the Forsaken. Yet the Forsaken’s allegiance was proven anew when Sylvanas aided the Horde in freeing Orgrimmar from the control of Warchief Garrosh Hellscream, who sought to enslave the other races under orcish supremacy. Now, these free-willed undead fortify their holdings around the Undercity as they ready themselves for the deadly future they believe is inevitable.</p>
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
                                <h1>Home Zone - Tirisfal Glades</h1>
                            </div>
                            <div className="content main-text">
                                <p>Once the heart of Lordaeron, Tirisfal Glades was a land of beautiful rolling hills and golden pastures. When the human kingdom fell to the undead Scourge, this verdant region was transformed into a plagued wasteland, barely able to sustain the dwindling remnants of life that still existed.</p>
                            </div>
                            <img className="img-fluid mt-5 mb-5" src={HomeZoneImage} alt={HomeZoneImage}></img>
                            <div className="stylized-title horde-title">
                                <h1>Home City - The Undercity</h1>
                            </div>
                            <div className="content main-text">
                                <p>During the Third War, the once-glorious capital of Lordaeron, Capital City, was decimated by a Scourge army under the command of Prince Arthas Menethil. When the undead continued their campaign against the living throughout the continent, only a small contingent of Arthas’ forces were left behind to carve out a new “Undercity” beneath the ruined capital. Yet these plans were abandoned when Arthas departed for Northrend in order to aid his master, the Lich King. Years later, Queen Sylvanas and her renegade undead, known as the Forsaken, claimed the Undercity as their own and completed the winding network of catacombs and crypts that the Scourge had begun constructing. Apart from being momentarily seized by the traitorous Forsaken Grand Apothecary Putress and the dreadlord Varimathras, the Undercity has remained in firm control of Sylvanas ever since. Today, rivers of poisonous sludge flow through all avenues of the vast Undercity. The toxic fumes and fetid odors permeating every corner of the stronghold have made it a place almost unbearable for the living members of the Horde. Yet for Sylvanas and her cursed followers, the Undercity has become a much-needed refuge in a world where her kind is still feared and hunted.</p>
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

export default ForsakenPage;