import './styles/RacePages.css';
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import RacesCrestList from '../components/RacesCrestList';
import MainHumanBackground from '../assets/background-internal-human.jpg';
import MainHumanCharacter from '../assets/image-human-character.png';
import PageRaceHumanBackground from '../assets/background-human.jpg';
import HomeZoneImageHuman from '../assets/background-elwynn-forest.jpg';
import HomeCityImageHuman from '../assets/background-stormwind.jpg';

import MainDwarfBackground from '../assets/background-internal-dwarf.jpg';
import MainDwarfCharacter from '../assets/image-dwarf-character.png';

import MainNightElfBackground from '../assets/background-internal-night-elf.jpg';
import MainNightElfCharacter from '../assets/image-night-elf-character.png';

import MainGnomeBackground from '../assets/background-internal-gnome.jpg';
import MainGnomeCharacter from '../assets/image-gnome-character.png';

import MainDraeneiBackground from '../assets/background-internal-draenei.jpg';
import MainDraeneiCharacter from '../assets/image-draenei-character.png';

import MainWorgenBackground from '../assets/background-internal-worgen.jpg';
import MainWorgenCharacter from '../assets/image-worgen-character.png';

const allianceRaceContent = [
    {
        id: 0,
        faction: 'Alliance',
        name: 'Human',
        color: '#250a03',
        mainBackground: MainHumanBackground,
        mainCharacter: MainHumanCharacter,
        pageRaceBackground: PageRaceHumanBackground,
        homeZoneImage: HomeZoneImageHuman,
        homeCityImage: HomeCityImageHuman,
        quote: "King's honor, friend.",
        title: 'Defenders of the Kingdom',
        description: 'Recent discoveries have shown that humans are descended from the barbaric vrykul, half-giant warriors who live in Northrend. Early humans were primarily a scattered and tribal people for several millennia, until the rising strength of the troll empire forced their strategic unification. Thus the nation of Arathor was formed, along with its capital, the city-state of Strom.',
        history: "After centuries of peace, the increasingly independent city-states of Arathor split into kingdoms: Gilneas to the west, Alterac, Dalaran, and Lordaeron to the northwest, Kul Tiras to the southwest, and Stormwind to the far south. Strom itself was renamed Stromgarde and remained a powerful kingdom. But disaster struck when the orcish Horde appeared on Azeroth and reduced Stormwind to ruins. The city’s survivors, including the young prince, Varian Wrynn, fled to Lordaeron, where the leaders of the seven kingdoms resolved to unify once again in the Alliance of Lordaeron. Together, they succeeded in defeating the Horde. But peace for the Alliance would only prove to be temporary. As upkeep costs rose, Gilneas and Stromgarde withdrew their kingdoms from the Alliance. Then came a plague that killed thousands of humans and converted them into undead servants of the Lich King. Lordaeron’s prince, Arthas Menethil, was manipulated by the Lich King, leading Arthas to kill his own father and journey to Northrend, where he merged with his master and became the next Lich King. For the next five years, Arthas remained in Northrend, plotting and building up his armies. But before Arthas could unleash his gathered power, humans and other other races banded together, securing a costly victory. Members of the Horde and the Alliance launched separate campaigns in Northrend, and their efforts resulted in the Lich King’s defeat. The kingdom of Stormwind has become the strongest bastion of humanity and the most powerful force in the now multi-racial Alliance. Now, the people of Stormwind hold fast to the principles of honor and justice as they defend their settlements and their allies.",
        zone: 'Elwynn Forest',
        zoneDescription: 'The peaceful woodlands to the south of Stormwind City seem more tranquil than ever since the fall of the Defias Brotherhood, but the inhabitants of Elwynn Forest are hardly idle. There are fields to sow, mines to work, and lumber to harvest. For all its pomp and grandeur, Stormwind wouldn’t last long without a constant stream of food and supplies to support the city’s population. This exchange has become increasingly threatened by kobold invasions, vicious feuds among farmers, and attacks from wild animals. Northshire Abbey remains dedicated to recruiting and training any adventurers brave enough to help keep the peace. Likewise, the Blackrock orcs are gathering their forces in the nearby Redridge Mountains. With Stormwind’s militia stretched thinner than ever, these renegade orcs stand ready to finally annihilate their old human enemies in Elwynn Forest.',
        city: 'Stormwind City',
        cityDescription: 'No city better demonstrates human determination than Stormwind. Destroyed during the Horde’s initial invasion of Azeroth, Stormwind was painstakingly reconstructed by the Stonemasons’ Guild after the Second War. Parts of the city were razed again when Deathwing, the corrupted black Dragon Aspect, brutally attacked Stormwind, but the other undamaged districts are more beautiful than ever thanks to their hardworking inhabitants. From the magnificent Cathedral of Light, which serves as a major spiritual hub, to the awe-inspiring Valley of Heroes, which commemorates the sacrifices of Stormwind’s loyal champions, the city truly represents the courageous heart of humanity.'
    },
    {
        id: 1,
        faction: "Alliance",
        name: "Dwarf",
        color: "#221416",
        mainBackground: MainDwarfBackground,
        mainCharacter: MainDwarfCharacter,
        pageRaceBackground: PageRaceHumanBackground,
        homeZoneImage: HomeZoneImageHuman,
        homeCityImage: HomeCityImageHuman,
        quote: "Great t' meet ya.",
        title: "Resilient Explorers",
        description: "The bold and courageous dwarves are an ancient race descended from the earthen—beings of living stone created by the titans when the world was young. Due to a strange malady known as the Curse of Flesh, the dwarves’ earthen progenitors underwent a transformation that turned their rocky hides into soft skin. Ultimately, these creatures of flesh and blood dubbed themselves dwarves and carved out the mighty city of Ironforge in the snowy peaks of Khaz Modan.",
        history: "For many years, three dwarven clans—the Bronzebeards, the Wildhammers, and the Dark Irons—lived united in Ironforge under the wise rule of High King Modimus Anvilmar. When Modimus passed away, tensions boiled over among the clans, and war erupted for control of the city. Thus began the War of the Three Hammers, a savage conflict that raged for many years, during which time the Bronzebeard clan won sole ownership of Ironforge, severing relations among the other clans and expelling its rivals. Recently, however, a twist of fate has drawn the rival clans back to Ironforge after they’ve spent centuries apart…. When freak natural disasters rocked Azeroth just prior to the Cataclysm, dwarven lands were not spared from calamity. A series of quakes tore through areas surrounding Ironforge, reducing settlements to rubble and taking the lives of many innocent dwarves. To glean answers as to the troubling state of the world, King Magni underwent a mystic ritual to commune with the earth. The ceremony, however, had an unexpected effect: Magni was transformed into diamond and became fused to the depths of Ironforge itself. In the power vacuum that followed, his estranged daughter, Moira, who had married into the Dark Iron clan, briefly claimed Ironforge’s throne and effectively locked down the city. If not for the intervention of King Varian Wrynn of Stormwind and his son, Prince Anduin, her actions might have sparked another civil war. With Varian’s guidance, control of Ironforge has since been divided equally among the Bronzebeard, Wildhammer, and Dark Iron clans through the Council of Three Hammers. As the clans put aside their old quarrels and began working together, the council’s ability to govern as one shows promise. Transformed by the ritual, Magni returned, but not to claim his throne—he was given a new purpose, and so he left Ironforge to the care of the Council. Now acting as the Speaker, Magni guided Azeroth's greatest heroes when the Burning Legion invaded Azeroth, and again when the very planet cried for help after Sargeras plunged his sword in Silithus. While the fate of the world is uncertain, Magni—and all Dwarves—have vowed to protect Azeroth with their lives.",
        zone: "Dun Morogh",
        zoneDescription: "Encircled by jagged mountain peaks, the snowy region of Dun Morogh has been the cultural heart of Ironforge’s dwarves for ages. Not long ago, quakes roused numerous troggs from their subterranean dwellings and drove the bestial creatures toward the dwarven settlement of Anvilmar in Coldridge Valley. The sudden influx of troggs also caused the savage Frostmane trolls to abandon their usual holdings on Shimmer Ridge and encroach upon dwarf-occupied areas. Threatened on two fronts, Dun Morogh’s mountaineers are spread thin. Without additional assistance, the prized lands of Dun Morogh might soon fall to the dwarves’ barbarous foes.",
        city: "Ironforge",
        cityDescription: "Carved into the stone heart of Khaz Modan, the mighty city of Ironforge is a testament to the dwarves’ strength and resilience. During the Second War between orcs and humans, many dwarven strongholds fell to the onslaught of the Horde, yet Ironforge was never breached. Now ruled over by the Council of Three Hammers, the city has entered into a tense and potentially violent era. Yet should the council rule with equality and justice, this new period in Ironforge’s history might very well be its greatest."
    },
    {
        id: 2,
        faction: "Alliance",
        name: "Night Elf",
        color: "#0d1112",
        mainBackground: MainNightElfBackground,
        mainCharacter: MainNightElfCharacter,
        pageRaceBackground: PageRaceHumanBackground,
        homeZoneImage: HomeZoneImageHuman,
        homeCityImage: HomeCityImageHuman,
        quote: "Elune be with you.",
        title: "Venerable Guardians",
        description: "The ancient and reclusive night elves have played a pivotal role in shaping Azeroth’s fate. The night elves of today still remember the War of the Ancients over ten thousand years ago, when they halted the Burning Legion’s first invasion of Azeroth. When the Legion’s remnants rallied together with the vile satyrs centuries later, the night elves again opposed the threat, ultimately vanquishing the forces that set out to wreak havoc on their world.",
        history: "The Legion’s emergence had forever changed night elven society. Under the leadership of Tyrande Whisperwind and Malfurion Stormrage, they cultivated a peaceful civilization, and shunned the use of arcane magic, which had attracted the Legion to Azeroth. But the night elves’ tranquility was shattered anew when the Legion and its terrifying undead Scourge launched a new invasion of Azeroth in the modern times--a conflict known as the Third War. The Night Elves fought alongside the Horde and Alliance to defeat the Legion, but their victory was only made possible through an explosion that damaged the blessed World Tree, which had long granted the night elves immortality and protection from aging and disease.Against Malfurion’s warnings, renegade druids created a new World Tree in hopes of restoring the night elves’ immortality. But this new World Tree eventually became tainted by a dark malady called the Emerald Nightmare, which the night elves were able to combat with Malfurion’s aid. Although the night elves still struggle to cope with the loss of immortality, the fate of Azeroth rests on their resilience and willingness to aid other races.",
        zone: "Teldrassil",
        zoneDescription: "The loss of the first World Tree, Nordrassil, during the Third War ushered in a new era in night elven history—one in which this venerable race would no longer be immune to aging, disease, and frailty. As the night elves struggled to cope with their fate, Fandral Staghelm and a group of like-minded druids conspired to create a new World Tree that would restore the night elves’ cherished immortality. Through these druids’ efforts, Teldrassil was planted off the coast of northern Kalimdor, and the bulk of night elven society took up residence atop the new World Tree’s mighty boughs. Teldrassil, however, was not blessed by the Dragon Aspects as Nordrassil had been, and thus the new World Tree did not change the fact that the night elves were mortal. Even worse, the World Tree and its inhabitants began to manifest signs of an unnatural ailment, later revealed to have been caused by the Emerald Nightmare. Much to the night elves’ dismay, it was discovered that Fandral had fallen to the Nightmare’s influence and had allowed Teldrassil’s corruption to take hold. Ultimately, Fandral’s wayward schemes were thwarted by the powerful archdruid Malfurion Stormrage, and Teldrassil was cleansed. To punctuate the victory over the Nightmare, the Dragon Aspects Alexstrasza and Ysera blessed the tree to ensure its vitality in the years to come. Yet as great and noble as this blessing was, it did not restore the night elves’ immortality. Of late, Teldrassil’s recovery has slowed, and signs of the Nightmare’s corruption have resurfaced. Already burdened by political tension and the vast destruction unleashed by the Cataclysm, the night elves must now ascertain the cause of their beloved World Tree’s ailment and refocus their efforts on the dire situation facing Azeroth.",
        city: "Darnassus",
        cityDescription: "Atop the massive boughs of the second World Tree, Teldrassil, lies the wondrous city of Darnassus. The elegant bridges, beautiful groves, and leaf-covered pathways that dot the city’s landscape are testaments to the night elves’ reverence for nature. One of Darnassus’s most notable structures is the stunning Temple of the Moon, the center of worship for High Priestess Tyrande Whisperwind and her Sisters of Elune. Darnassus is home to night elves of all vocations, and the city has recently opened its doors to human refugees from Gilneas as well. Many of these embattled humans have contracted a strange curse that transforms them into feral wolf-beasts known as worgen. Although they’re usually reclusive, the night elves have allowed these outsiders into Darnassus because they know the perils of the Gilneans’ cursed state all too well: it was, in fact, a group of night elf druids that created Azeroth’s first worgen millennia ago. Despite the arrival of these new residents, Darnassus remains a symbol of the night elves’ rich culture and glorious history."
    },
    {
        id: 3,
        faction: "Alliance",
        name: "Gnome",
        color: "#19110a",
        mainBackground: MainGnomeBackground,
        mainCharacter: MainGnomeCharacter,
        pageRaceBackground: PageRaceHumanBackground,
        homeZoneImage: HomeZoneImageHuman,
        homeCityImage: HomeCityImageHuman,
        quote: "My, you're a tall one!",
        title: "Curious Tinkerers",
        description: "The clever, spunky, and oftentimes eccentric gnomes present a unique paradox among the civilized races of Azeroth. Brilliant inventors with an irrepressibly cheerful disposition, this race has suffered treachery, displacement, and near-genocide. It is their remarkable optimism in the face of such calamity that symbolizes the truly unshakable spirit of the gnomes.​",
        history: "The diminutive gnomes—renowned mechanics, engineers, technicians and tool-makers—have made their mark on Azeroth through the application of a collective intelligence and ambition overshadowing that of their larger peers. Although little is known concerning gnomish history previous to the Second War, much of gnomish philosophy and recorded knowledge is focused on forward-thinking, inventive concepts. However, recent developments have uncovered evidence that they originated from titan creations; mechanical helpers that were afflicted with the Curse of Flesh, becoming the gnomes of today. It wasn’t until their discovery by the dwarves centuries later that gnomes were recognized as a viable and important race. The dwarves were impressed with the ingenuity and quickness of their smaller “kin” (for they had also been titan-forged and similarly cursed), and they assisted the gnomes in constructing a capital city, Gnomeregan, in the foothills of Dun Morogh near the dwarves’ own capital of Ironforge. From their wondrous techno-city, gnomes provided invaluable support in weaponry, vehicles, and energetic troops to the Alliance of dwarves, humans, and high elves. But when the Burning Legion invaded during the Third War, the gnomes strangely refused to send aid to their allies. It wasn’t until the war had ended that the Alliance learned the reason for the gnomes’ withdrawal; an ancient menace had risen from the bowels of Azeroth to strike at Gnomeregan. Knowing that their allies’ priority was defeating the Burning Legion, the gnomes decided to make their stand alone. Though they fought valiantly to save their beloved city, Gnomeregan was lost. Most of the gnome race was wiped out during the fall of Gnomeregan; some say that as much as 80 percent of Azeroth’s gnomes died during those horrible days. The few survivors fled and established New Tinkertown, where they quietly went about rebuilding their forces, healing their wounds, and preparing to retake Gnomeregan.",
        zone: "Gnomeregan",
        zoneDescription: "A technical marvel, the subterranean city of Gnomeregan is wrought-iron evidence of gnomish brilliance, ambition, and ingenuity. It was carved into the stony foothills of Dun Morogh, and winds deep into the heart of the land. Currently a battleground between the founding gnomes and the traitor Sicco Thermaplugg, the once-gleaming metal hallways of this labyrinthine city are slowly being retaken.",
        city: "Gnomeregan",
        cityDescription: ""
    },
    {
        id: 4,
        faction: "Alliance",
        name: "Draenei",
        color: "#0a0810",
        mainBackground: MainDraeneiBackground,
        mainCharacter: MainDraeneiCharacter,
        pageRaceBackground: PageRaceHumanBackground,
        homeZoneImage: HomeZoneImageHuman,
        homeCityImage: HomeCityImageHuman,
        quote: "Archenon poros.",
        title: "Spiritual Exiles",
        description: "Long before the fallen titan Sargeras unleashed the Legion on Azeroth, he conquered the world of Argus and its inhabitants, the eredar. Believing that this gifted race would be crucial in his quest to undo all of creation, Sargeras contacted the eredar’s leaders – Kil’jaeden, Archimonde, and Velen, offering them knowledge and power in exchange for their loyalty.",
        history: "Only Velen abstained, for he had seen a vision. In it, his people were transformed into demons; members of Sargeras’ Burning Legion, a growing army of unspeakable evil. With the aid of the benevolent naaru, Velen gathered like-minded eredar and escaped Argus. These renegades would call themselves the draenei, or 'exiled ones.' Kil’jaeden, infuriated by the draenei’s flight from Argus and their refusal of Sargeras’ offer, led the Legion’s armies in pursuit of his former people throughout the cosmos. But the draenei eluded their hunters, discovering sanctuary on a remote world that they would name Draenor. There, the draenei developed an extraordinary society and coexisted peacefully with the shamanistic orcs native to the planet Draenor. Kil’jaeden eventually found Draenor and corrupted the noble orcs into a single, bloodthirsty force: the Horde. Blinded by rage, the Horde slaughtered most of the draenei race and forced any survivors into hiding. After being exposed to fel energies wielded by orc warlocks, many draenei were mutated into physically deteriorated forms known as the Krokul, or “Broken,”. Years later, the shaman Ner’zhul opened magical portals throughout Draenor, and the resulting energies shattered the dying world. What remained of Draenor—henceforth known as Outland—devolved into a battleground among the Burning Legion and other factions vying for control of the ruined landscape. To escape the chaos, Velen and a number of his followers commandeered a dimensional fortressnamed the Exodar. In search of new allies, the draenei left Outland. However, the blood elves had sabotaged the Exodar’s engines, and the draenei ultimately crash-landed on the world of Azeroth, where they pledged their loyalty to the Alliance. Together with their new allies, Velen and his refugees returned to Outland and defeated their demonic rivals. But Velen had another vision: a coming war between the forces of light and darkness. The draenei now prepare to defend their new home, Azeroth, against a shadow they believe is fast approaching.",
        zone: "Azuremyst Isle",
        zoneDescription: "Located off of the coast of northern Kalimdor, Azuremyst Isle is home to the draenei, refugees who fled Outland aboard the massive dimensional vessel named the Exodar. When the draenei crashed on Azeroth, powerful crystals from their vessel were scattered about Azuremyst Isle, mutating flora and fauna near the debris. Following the ill-fated landing, the draenei worked feverishly to find survivors and mend any damages inflicted on the isle due to their disastrous arrival. The draenei have since taken to the isle and established the remains of the Exodar as their base of power. Having suffered a long and arduous history of exile, the draenei are now resolved to give their lives in defense of Azuremyst Isle.",
        city: "The Exodar",
        cityDescription: "Once a satellite structure of the mighty Tempest Keep, the dimensional craft known as the Exodar was used by a group of draenei to escape their perilous home on Outland. After departing the shattered draenei world, the Exodar appeared above northern Kalimdor when a spectacular explosion ripped open the skies. The great vessel impacted on the shores of Azuremyst Isle, which has since become home to Outland’s refugee draenei. Following their dramatic landing, the draenei have utilized the remains of the Exodar to great effect, transforming it into a base of operations for their dealings on Azeroth."
    },
    {
        id: 5,
        faction: "Alliance",
        name: "Worgen",
        color: "#16151f",
        mainBackground: MainWorgenBackground,
        mainCharacter: MainWorgenCharacter,
        pageRaceBackground: PageRaceHumanBackground,
        homeZoneImage: HomeZoneImageHuman,
        homeCityImage: HomeCityImageHuman,
        quote: "My bite is far worse than my bark.",
        title: "Cursed Recluses",
        description: "Behind the formidable Greymane Wall, a terrible curse transformed some of the stalwart citizens of the isolated kingdom of Gilneas into nightmarish lupine beasts known as worgen. Human scholars intensely debated the origins of the curse, until it was revealed that the original worgen were not—as previously believed—nightmares from another dimension, but cursed night elf druids.",
        history: "Long ago, amid a brutal war between the night elves and the demonic satyrs in Kalimdor, a group of druids practiced the ability to transform into a powerful yet unwieldy form that embodied the fury of the wolf Ancient, Goldrinn. Taught by Ralaar Fangfire, these Druids of the Pack sought to use the Scythe of Elune, a mystical artifact, to temper the uncontrollable rage inherent in their chosen form. Rather than abate the druids’ fury, however, the Scythe transformed Ralaar and his followers into worgen: bestial humanoids enslaved by their own primal instincts. Ralaar’s druids tore through friend and foe alike. Night elves wounded by the beasts contracted a virulent curse that turned them into worgen as well. Desperate to staunch the affliction’s spread, Archdruid Malfurion Stormrage banished the worgen to a part of the Emerald Dream—Azeroth’s spirit world—where they would be in peaceful slumber for all eternity. The worgen threat was contained for millennia, until Archmage Arugal pulled the wolf-beasts from the Dream. Summoned by order of King Genn Greymane, the worgen battled Scourge forces encroaching on the kingdom of Gilneas. Yet the feral creatures soon spread their curse throughout the human population, infecting Gilnean soldiers stationed beyond the Greymane Wall. The night elves, feeling responsible for the creation of the curse and the destruction it caused, agreed to help the Gilneans. With the Scythe of Elune, the night elves could not permanently cure the affliction, but managed to teach the Gilneans how to control their curse; shapeshifting at will from human to worgen, and back again. Now, these self-disciplined worgen have rejoined the Alliance as powerful allies, prepared to fight to keep their humanity and their place in society.",
        zone: "Gilneas",
        zoneDescription: "For many years, the nation of Gilneas existed in isolation behind the colossal Greymane Wall. Free from outside influence, the kingdom relied on the indomitable spirit and tenacity of its citizens to make its own destiny in the world. Of late, however, a series of events has shaken Gilneas to its core. While the nation struggles to recover from a past civil war, a devastating worgen curse has spread throughout Gilneas, turning some of its inhabitants into ferocious beasts.",
        city: "Gilneas City",
        cityDescription: "Recently these savage worgen have launched a surprise assault against the kingdom’s fortified capital, Gilneas City. The uninfected citizenry have taken up arms in defense of their home and are now battling the worgen throughout the city’s winding cobblestone streets and narrow alleyways. Yet with no signs of relenting, the worgen threat has raised fears that perhaps the days of Gilneas surviving on its own have come to an end"
    },
];

const RacesAlliance = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        props.headerLayout('Alliance');
    });
    console.log(props)
    const[factionSelected] = useState(allianceRaceContent[props.selectedRace].faction);
    
    return(
        <div style={{ backgroundColor: `${allianceRaceContent[props.selectedRace].color}` }}>
            <section id="main-section" className="internal-full-pages main-section" style={{ backgroundImage: `url(${allianceRaceContent[props.selectedRace].mainBackground})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="internal-title">{allianceRaceContent[props.selectedRace].name}</h1>
                            <h2 className="internal-subtitle">{allianceRaceContent[props.selectedRace].quote}</h2>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <img className="" alt={allianceRaceContent[props.selectedRace].mainCharacter} src={allianceRaceContent[props.selectedRace].mainCharacter}></img>
                        </div>
                    </div>
                    <div className="stylized-divider bottom-divider" style={{backgroundImage: `url(${StylizedDivider})`}}></div>
                </div>
            </section>
            <section id="aboutRace" className="internal-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="stylized-title alliance-title">
                                <h1>{allianceRaceContent[props.selectedRace].title}</h1>
                            </div>
                            <div className="content main-text">
                                <p>{allianceRaceContent[props.selectedRace].description}</p>
                            </div>
                            <div className="stylized-title alliance-title">
                                <h1>{`${allianceRaceContent[props.selectedRace].name} History`}</h1>
                            </div>
                            <div className="content main-text">
                                <p>{allianceRaceContent[props.selectedRace].history}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ position: 'relative' }}>
                <div className="background-section" style={{ backgroundImage: `url(${allianceRaceContent[props.selectedRace].pageRaceBackground})` }}></div>
                <div className="header-divider" style={{ backgroundImage: `url(${SectionDivider})` }}></div>
            </div>
            <section id="home-land" className="internal-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="stylized-title alliance-title">
                                <h1>Home Zone - {allianceRaceContent[props.selectedRace].zone}</h1>
                            </div>
                            <div className="content main-text">
                                <p>{allianceRaceContent[props.selectedRace].zoneDescription}</p>
                            </div>
                            <img className="img-fluid mt-5 mb-5" src={allianceRaceContent[props.selectedRace].homeZoneImage} alt={allianceRaceContent[props.selectedRace].homeZoneImage}></img>
                            <div className="stylized-title alliance-title">
                                <h1>Home City - {allianceRaceContent[props.selectedRace].city}</h1>
                            </div>
                            <div className="content main-text">
                                <p>{allianceRaceContent[props.selectedRace].cityDescription}</p>
                            </div>
                            <img className="img-fluid mt-5 mb-5" src={allianceRaceContent[props.selectedRace].homeCityImage} alt={allianceRaceContent[props.selectedRace].homeCityImage}></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="race-list">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="stylized-title alliance-title">
                                <h1>More Alliance Races</h1>
                            </div>
                        </div>
                        <div className="content w-100 d-flex flex-wrap">
                            <RacesCrestList races={factionSelected} pageId={allianceRaceContent[props.selectedRace].id} />
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {selectedRace: state.selectedRace}
}

export default connect(mapStateToProps, {})(RacesAlliance)