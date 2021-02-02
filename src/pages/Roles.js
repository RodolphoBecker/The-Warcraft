import './styles/About.css';
import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import RolesCrestList from '../components/RolesCrestList';
import StylizedDivider from '../assets/image-column-divisor.png';
import SectionDivider from '../assets/image-column-divisor-02.png';
import axios from 'axios';
import Tilt from 'react-vanilla-tilt';

import MainWarriorBackground from '../assets/roles/background-internal-warrior.jpg';
import MainWarriorCharacterImage from '../assets/roles/image-warrior-character.png';
import PageWarriorBackground from '../assets/roles/background-warrior.jpg';
import MainWarlockBackground from '../assets/roles/background-internal-warlock.jpg';
import MainWarlockCharacterImage from '../assets/roles/image-warlock-character.png';
import PageWarlockBackground from '../assets/roles/background-warlock.jpg';
import MainShamanBackground from '../assets/roles/background-internal-shaman.jpg';
import MainShamanCharacterImage from '../assets/roles/image-shaman-character.png';
import PageShamanBackground from '../assets/roles/background-shaman.jpg';
import MainRogueBackground from '../assets/roles/background-internal-rogue.jpg';
import MainRogueCharacterImage from '../assets/roles/image-rogue-character.png';
import PageRogueBackground from '../assets/roles/background-rogue.jpg';
import MainPriestBackground from '../assets/roles/background-internal-priest.jpg';
import MainPriestCharacterImage from '../assets/roles/image-priest-character.png';
import PagePriestBackground from '../assets/roles/background-priest.jpg';
import MainPaladinBackground from '../assets/roles/background-internal-paladin.jpg';
import MainPaladinCharacterImage from '../assets/roles/image-paladin-character.png';
import PagePaladinBackground from '../assets/roles/background-paladin.jpg';
import MainMonkBackground from '../assets/roles/background-internal-monk.jpg';
import MainMonkCharacterImage from '../assets/roles/image-monk-character.png';
import PageMonkBackground from '../assets/roles/background-monk.jpg';
import MainMageBackground from '../assets/roles/background-internal-mage.jpg';
import MainMageCharacterImage from '../assets/roles/image-mage-character.png';
import PageMageBackground from '../assets/roles/background-mage.jpg';
import MainHunterBackground from '../assets/roles/background-internal-hunter.jpg';
import MainHunterCharacterImage from '../assets/roles/image-hunter-character.png';
import PageHunterBackground from '../assets/roles/background-hunter.jpg';
import MainDruidBackground from '../assets/roles/background-internal-druid.jpg';
import MainDruidCharacterImage from '../assets/roles/image-druid-character.png';
import PageDruidBackground from '../assets/roles/background-druid.jpg';
import MainDemonHunterBackground from '../assets/roles/background-internal-demonHunter.jpg';
import MainDemonHunterCharacterImage from '../assets/roles/image-demonHunter-character.png';
import PageDemonHunterBackground from '../assets/roles/background-demonHunter.jpg';
import MainDeathKnightBackground from '../assets/roles/background-internal-deathKnight.jpg';
import MainDeathKnightCharacterImage from '../assets/roles/image-DeathKnight-character.png';
import PageDeathKnightBackground from '../assets/roles/background-deathKnight.jpg';

const rolesPageReducer = [
    {
        id: 0,
        name: 'Warrior',
        color: '#221411',
        mainBackground: MainWarriorBackground,
        mainCharacterImage: MainWarriorCharacterImage,
        title: 'Lords of War',
        description: 'For as long as war has raged, heroes from every race have aimed to master the art of battle. Warriors combine strength, leadership, and a vast knowledge of arms and armor to wreak havoc in glorious combat. Some protect from the front lines with shields, locking down enemies while allies support the warrior from behind with spell and bow. Others forgo the shield and unleash their rage at the closest threat with a variety of deadly weapons.',
        information: 'Warriors equip themselves carefully for combat and engage their enemies head-on, letting attacks glance off their heavy armor. They use diverse combat tactics and a wide variety of weapon types to protect their more vulnerable allies. Warriors must carefully master their rage – the power behind their strongest attacks – in order to maximize their effectiveness in combat.',
        armor: ['Plate', 'Shield'],
        weapons: ['Daggers', 'Fist Weapons', 'Axes', 'Maces', 'Swords', 'Polearms', 'Staves'],
        pageBackground: PageWarriorBackground
    },
    {
        id: 1,
        name: 'Warlock',
        color: '#1c0905',
        mainBackground: MainWarlockBackground,
        mainCharacterImage: MainWarlockCharacterImage,
        title: 'Channelers of Forbidden Powers',
        description: 'In the face of demonic power, most heroes see death. Warlocks see only opportunity. Dominance is their aim, and they have found a path to it in the dark arts. These voracious spellcasters summon demonic minions to fight beside them. At first, they command only the service of imps, but as a warlock’s knowledge grows, seductive succubi, loyal voidwalkers, and horrific felhunters join the dark sorcerer’s ranks to wreak havoc on anyone who stands in their master’s way.',
        information: 'Warlocks burn and destroy weakened foes with a combination of crippling illnesses and dark magic. While their demon pets protect and enhance them, warlocks strike at their enemies from a distance. As physically weak spellcasters bereft of heavy armor, cunning warlocks allow their minions to take the brunt of enemy attacks in order to save their own skin.',
        armor: ['Cloth'],
        weapons: ['Daggers', 'One-Handed Swords', 'Staves', 'Wands'],
        pageBackground: PageWarlockBackground
    },
    {
        id: 2,
        name: 'Shaman',
        color: '#01000e',
        mainBackground: MainShamanBackground,
        mainCharacterImage: MainShamanCharacterImage,
        title: 'Adepts of the Elements',
        description: 'Shaman are spiritual guides and practitioners, not of the divine, but of the very elements. Unlike some other mystics, shaman commune with forces that are not strictly benevolent. The elements are chaotic, and left to their own devices, they rage against one another in unending primal fury. It is the call of the shaman to bring balance to this chaos. Acting as moderators among earth, fire, water, and air, shaman summon totems that focus the elements to support the shaman’s allies or punish those who threaten them.',
        information: 'During combat, shaman place damaging and controlling totems on the ground to maximize their effectiveness while hindering their enemies. Shaman are versatile enough to battle foes up close or at range, but wise shaman choose their avenue of attack based on their enemies’ strengths and weaknesses.',
        armor: ['Mail', 'Shields'],
        weapons: ['Daggers', 'Fist Weapons', 'Axes', 'Maces', 'Staves'],
        pageBackground: PageShamanBackground
    },
    {
        id: 3,
        name: 'Rogue',
        color: '#0d0c12',
        mainBackground: MainRogueBackground,
        mainCharacterImage: MainRogueCharacterImage,
        title: 'Prowling Cutpurses',
        description: 'For rogues, the only code is the contract, and their honor is purchased in gold. Free from the constraints of a conscience, these mercenaries rely on brutal and efficient tactics. Lethal assassins and masters of stealth, they will approach their marks from behind, piercing a vital organ and vanishing into the shadows before the victim hits the ground.',
        information: 'Rogues often initiate combat with a surprise attack from the shadows, leading with vicious melee strikes. When in protracted battles, they utilize a successive combination of carefully chosen attacks to soften the enemy up for a killing blow. Rogues must take special care when selecting targets so that their combo attacks are not wasted, and they must be conscious of when to hide or flee if a battle turns against them.',
        armor: ['Leather'],
        weapons: ['Daggers', 'Fist Weapons', 'One-Handed Axes', 'One-Handed Maces', 'One-Handed Swords'],
        pageBackground: PageRogueBackground
    },
    {
        id: 4,
        name: 'Priest',
        color: '#171b27',
        mainBackground: MainPriestBackground,
        mainCharacterImage: MainPriestCharacterImage,
        title: 'Invokers of Light and Darkness',
        description: 'Priests are devoted to the spiritual, and express their unwavering faith by serving the people. For millennia they have left behind the confines of their temples and the comfort of their shrines so they can support their allies in war-torn lands. In the midst of terrible conflict, no hero questions the value of the priestly orders.',
        information: 'Priests use powerful healing magic to fortify themselves and their allies. They also wield powerful offensive spells from a distance, but can be overwhelmed by enemies due to their physical frailty and minimal armor. Experienced priests carefully balance the use of their offensive powers when tasked with keeping their party alive.',
        armor: ['Cloth'],
        weapons: ['Daggers', 'One-Handed Maces', 'Staves', 'Wands'],
        pageBackground: PagePriestBackground
    },
    {
        id: 5,
        name: 'Paladin',
        color: '#140613',
        mainBackground: MainPaladinBackground,
        mainCharacterImage: MainPaladinCharacterImage,
        title: 'Paragons of Justice',
        description: 'This is the call of the paladin: to protect the weak, to bring justice to the unjust, and to vanquish evil from the darkest corners of the world. These holy warriors are equipped with plate armor so they can confront the toughest of foes, and the blessing of the Light allows them to heal wounds and, in some cases, even restore life to the dead.',
        information: 'Paladins stand directly in front of their enemies, relying on heavy armor and healing in order to survive incoming attacks. Whether with massive shields or crushing two-handed weapons, Paladins are able to keep claws and swords from their weaker fellows – or they use healing magic to ensure that they remain on their feet.',
        armor: ['Plate', 'Shields'],
        weapons: ['Axes', 'Maces', 'Swords', 'Polearms'],
        pageBackground: PagePaladinBackground
    },
    {
        id: 6,
        name: 'Monk',
        color: '#0e1003',
        mainBackground: MainMonkBackground,
        mainCharacterImage: MainMonkCharacterImage,
        title: 'Musing Brawlers',
        description: 'When the pandaren were subjugated by the mogu centuries ago, it was the monks that brought hope to a seemingly dim future. Restricted from using weapons by their slave masters, these pandaren instead focused on harnessing their chi and learning weaponless combat. When the opportunity for revolution struck, they were well-trained to throw off the yoke of oppression.',
        information: 'Whatever their combat role, monks rely mainly on their hands and feet to do the talking, and on strong connection with their inner chi to power their abilities. Monks can also heal their allies while at the same time damaging their enemies.',
        armor: ['Lether'],
        weapons: ['Fist Weapons', 'One-Handed Axes', 'One-Handed Maces', 'One-Handed Swords', 'Polearms', 'Staves'],
        pageBackground: PageMonkBackground
    },
    {
        id: 7,
        name: 'Mage',
        color: '#140e1a',
        mainBackground: MainMageBackground,
        mainCharacterImage: MainMageCharacterImage,
        title: 'Masters of Time and Space',
        description: 'Students gifted with a keen intellect and unwavering discipline may walk the path of the mage. The arcane magic available to magi is both great and dangerous, and thus is revealed only to the most devoted practitioners. To avoid interference with their spellcasting, magi wear only cloth armor, but arcane shields and enchantments give them additional protection. To keep enemies at bay, magi can summon bursts of fire to incinerate distant targets and cause entire areas to erupt, setting groups of foes ablaze.',
        information: 'Mages demolish their foes with arcane incantations. Although they wield powerful offensive spells, mages are fragile and lightly armored, making them particularly vulnerable to close-range attacks. Wise mages make careful use of their spells to keep their foes at a distance or hold them in place.',
        armor: ['Cloth'],
        weapons: ['Wands', 'Daggers', 'One-Handed Swords', 'Staves'],
        pageBackground: PageMageBackground
    },
    {
        id: 8,
        name: 'Hunter',
        color: '#061510',
        mainBackground: MainHunterBackground,
        mainCharacterImage: MainHunterCharacterImage,
        title: 'Inescapable Stalkers',
        description: 'From an early age, the call of the wild draws some adventurers from the comfort of their homes into the unforgiving primal world outside. Those who endure become hunters. Masters of their environment, they are able to slip like ghosts through the trees and lay traps in the paths of their enemies.',
        information: 'Hunters battle their foes at a distance or up close, commanding their pets to attack while they nock their arrows, fire their guns, or ready their polearms. Though their weapons are effective at short and long ranges, hunters are also highly mobile. They can evade or restrain their foes to control the arena of battle.',
        armor: ['Mail'],
        weapons: ['Axes', 'Bows', 'Crossbows', 'Daggers', 'Fist Weapons', 'Guns', 'Polearms', 'Staves', 'Swords'],
        pageBackground: PageHunterBackground
    },
    {
        id: 9,
        name: 'Druid',
        color: '#0f1a16',
        mainBackground: MainDruidBackground,
        mainCharacterImage: MainDruidCharacterImage,
        title: 'Savage Shapeshifters',
        description: 'Druids harness the vast powers of nature to preserve balance and protect life. With experience, druids can unleash nature’s raw energy against their enemies, raining celestial fury on them from a great distance, binding them with enchanted vines, or ensnaring them in unrelenting cyclones.',
        information: 'Druids are versatile combatants, in that they can fulfill nearly every role – healing, tanking, and damage dealing. It’s critical that druids tailor the form they choose to the situation, as each form bears a specific purpose.',
        armor: ['Leather'],
        weapons: ['Daggers', 'Fist Weapons', 'Maces', 'Polearms', 'Staves'],
        pageBackground: PageDruidBackground
    },
    {
        id: 10,
        name: 'Demon Hunter',
        color: '#141c0d',
        mainBackground: MainDemonHunterBackground,
        mainCharacterImage: MainDemonHunterCharacterImage,
        title: 'Unforgiving Predators',
        description: 'Demon hunters, disciples of Illidan Stormrage, uphold a dark legacy, one that frightens their allies and enemies alike. The Illidari embrace fel and chaotic magics—energies that have long threatened the world of Azeroth—believing them necessary to challenge the Burning Legion. Wielding the powers of demons they’ve slain, they develop demonic features that incite revulsion and dread in fellow elves.',
        information: 'Forgoing heavy armor, Demon Hunters capitalize on speed, closing the distance quickly to strike enemies with one-handed weapons. However, Illidari must also use their agility defensively to ensure that battles end favorably.',
        armor: ['Leather'],
        weapons: ['Warglaives', 'Fist Weapons', 'One-Handed Axes', 'One-Handed Swords'],
        pageBackground: PageDemonHunterBackground
    },
    {
        id: 11,
        name: 'Death Knight',
        color: '#05131c',
        mainBackground: MainDeathKnightBackground,
        mainCharacterImage: MainDeathKnightCharacterImage,
        title: 'Heralds of Doom',
        description: "When the Lich King’s control over his death knights was broken, his former champions found their new purpose as Knights of the Ebon Blade. After Bolvar Fordragon donned the helm to keep the undead Scourge contained, he called forth a new generation of death knights to join the Ebon Blade's cause.",
        information: 'Death Knights engage their foes up-close, supplementing swings of their weapons with dark magic that renders enemies vulnerable or damages them with unholy power. They drag foes into one-on-one conflicts, compelling them to focus their attacks away from weaker companions. To prevent their enemies from fleeing their grasp, death knights must remain mindful of the power they call forth from runes, and pace their attacks appropriately.',
        armor: ['Plate'],
        weapons: ['Axes', 'Maces', 'Swords', 'Polearms'],
        pageBackground: PageDeathKnightBackground
    },
]

const Roles = ({selectedRole}) => {

    useEffect(() => {
        rolesResponse();
    },[]);

    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    const[rolesApi, setRolesApi] = useState({});
    const baseUrl = 'https://us.api.blizzard.com/data/wow/playable-class/index?namespace=static-us&locale=en_US&access_token=USwaRRukeSsv2ilL65jeOz3gB9HBh7SvEo';

    const rolesResponse = async () => {
        const response = await axios.get(baseUrl, {})
        setRolesApi(response);
    }
    
    const mappedWeapons = rolesPageReducer[selectedRole].weapons.map((weapon)=>{
        return(
            <React.Fragment>
                <li>{weapon}</li>
            </React.Fragment>
        )
    });

    const mappedArmor = rolesPageReducer[selectedRole].armor.map((armor) => {
        return(
            <React.Fragment>
                <li>{armor}</li>
            </React.Fragment>
        )
    });

    return(
        <div style={{ backgroundColor: `${rolesPageReducer[selectedRole].color}` }}>
            <section id="main-section" className="internal-full-pages main-section roles-page" style={{ backgroundImage: `url(${rolesPageReducer[selectedRole].mainBackground})`, overflow: 'hidden' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="internal-title">{rolesPageReducer[selectedRole].name}</h1>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <img className="" alt={rolesPageReducer[selectedRole].mainCharacterImage} src={rolesPageReducer[selectedRole].mainCharacterImage}></img>
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
                                <h1>{rolesPageReducer[selectedRole].title}</h1>
                            </div>
                            <div className="content main-text">
                                <p>{rolesPageReducer[selectedRole].description}</p>
                            </div>
                            <div className="stylized-title horde-title">
                                <h1>Class Information</h1>
                            </div>
                            <div className="content main-text">
                                <p>{rolesPageReducer[selectedRole].information}</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="stylized-title horde-title">
                                <h1>Armor Type</h1>
                            </div>
                            <div className="content main-text">
                                <ul>
                                    {mappedArmor}
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
                <div className="background-section" style={{ backgroundImage: `url(${rolesPageReducer[selectedRole].pageBackground})` }}></div>
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
                            <RolesCrestList pageIndex={rolesPageReducer[selectedRole].id} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { selectedRole: state.selectedRole }
}

export default connect(mapStateToProps, {})(Roles)