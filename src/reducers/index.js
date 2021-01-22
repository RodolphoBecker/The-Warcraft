import { combineReducers } from 'redux';
import OrcCrest from '../assets/crest-horde-orc.png';
import TaurenCrest from '../assets/crest-horde-tauren.png';
import TrollCrest from '../assets/crest-horde-troll.png';
import ForsakenCrest from '../assets/crest-horde-forsaken.png';
import BloodElvesCrest from '../assets/crest-horde-blood-elf.png';
import GoblinCrest from '../assets/crest-horde-goblin.png';

import HumanCrest from '../assets/crest-alliance-human.png';
import DwarfCrest from '../assets/crest-alliance-dwarf.png';
import NightElfCrest from '../assets/crest-alliance-nightElf.png';
import GnomeCrest from '../assets/crest-alliance-gnome.png';
import DraeneiCrest from '../assets/crest-alliance-draenei.png';
import WorgenCrest from '../assets/crest-alliance-worgen.png';

import MainOrcBackground from '../assets/background-internal-orc.jpg';
import MainOrcCharacter from '../assets/image-orc-character.png';
import PageRaceOrcBackground from '../assets/background-orc.jpg';
import HomeZoneImageOrc from '../assets/background-durotar.jpg';
import HomeCityImageOrc from '../assets/background-orgrimmar.jpg';

import MainTaurenBackground from '../assets/background-internal-tauren.jpg';
import MainTaurenCharacter from '../assets/image-tauren-character.png';
import PageRaceTaurenBackground from '../assets/background-tauren.jpg';
import HomeZoneImageTauren from '../assets/background-mulgore.jpg';
import HomeCityImageTauren from '../assets/background-thunderbluff.jpg';

import MainTrollBackground from '../assets/background-internal-troll.jpg';
import MainTrollCharacter from '../assets/image-troll-character.png';
import PageRaceTrollBackground from '../assets/background-troll.jpg';
import HomeZoneImageTroll from '../assets/background-echo-isles.jpg';
import HomeCityImageTroll from '../assets/background-darkspear.jpg';


const hordeRacesPageReducer = () => {
    return [
        {
			id: 0,
			name: 'Orc',
			color: '#250a03',
			crest: OrcCrest,
			mainBackground: MainOrcBackground,
			mainCharacter: MainOrcCharacter,
			pageRaceBackground: PageRaceOrcBackground,
			homeZoneImage: HomeZoneImageOrc,
			homeCityImage: HomeCityImageOrc,
			quote: 'LOK-NARASH!',
			title: 'Fierce Conquerors',
			description: 'Unlike the other races of the Horde, orcs are not native to Azeroth. Initially, they lived as shamanic clans on the lush world of Draenor. They abandoned their peaceful culture when Kil’jaeden, a demon lord of the Burning Legion, corrupted the orcs and used them in his vengeful plot against the draenei, who were exiles from Kil’jaeden’s homeworld.',
			history: 'Kil’jaeden’s plan worked. The orcs drank the blood of Mannoroth—a prominent Burning Legion general—infusing them with power and enslaving them to the Legion. Exposure to fel energies turned their naturally brown skin into a sickly green. Under the demon’s influence, the orcs killed off most of the draenei population, but Kil’jaeden would not stop there. With the orcs at their disposal, the Burning Legion planned to invade Azeroth once again. To this end, the corrupted human archmage Medivh conspired with the orc warlock Gul’dan to build the Dark Portal, a massive structure that would allow the orcs passage to Azeroth. Arriving in Azeroth, the seemingly unstoppable orc armies, known as the Horde, crushed the human kingdom of Stormwind. Eventually, however, the humans made a last stand and were able to defeat the Horde and enslave most of the survivors. But a young slave named Thrall, together with Warchief Orgrim Doomhammer, fought to free the captive orcs. Orgrim died in battle, and the title of warchief, as well as Orgrim’s weapon, the Doomhammer, was passed onto Thrall. Thrall led his people to Kalimdor, where his friend and mentor, Grommash Hellscream, gave his life to defeat Mannoroth and forever free the orcs from the Legion’s control. Years later, Thrall returned to Draenor, now known as Outland, to once again stop the Legion. There, he convinced Garrosh, son of Grommash Hellscream, to join the Horde. Thrall believed that Garrosh would be a clear choice for his successor, but as he learned eventually, the orcs would need more than a lone leader figure to endure. After years of long wars and bloodshed, Thrall and the orcs of Orgrimmar ultimately found a new way to rule—the creation of a council in which all members of the Horde have equal representation—and are once more hopeful for their future on Azeroth.',
			zone: 'Durotar',
			zoneDescription: 'The dry, harsh land of Durotar is home to some of the toughest creatures on Azeroth. Unwary travelers may fall prey to venomous scorpids, ferocious crocolisks, or angry quilboar. Thrall chose to settle this inhospitable area after the Third War as penance for the orcs’ past transgressions. He named the land after his father, Durotan, former chieftain of the Frostwolf clan. Following the Cataclysm, many of the orcish settlements were flooded or destroyed, and the Northwatch soldiers at Tiragarde Keep have become more aggressive than ever. As relations worsen between the Alliance and the Horde, it is essential that the orcs contain these threats swiftly to ensure the survival of their people.',
			city: 'Orgrimmar',
			cityDescription: 'Named for the former Horde warchief Orgrim Doomhammer, this capital was rapidly constructed when the orcs first settled in Durotar. Garrosh Hellscream has recently rebuilt most of the city’s architecture, and now Orgrimmar’s fortresses rank among the most imposing on Azeroth. Spiked metal towers line the city’s streets, and the red-and-black banners of the Horde wave from every post. Most of the various races have separated into their own districts, from the tauren in the Valley of Wisdom to the trolls in the Valley of Spirits. Grommash Hold towers over all else, allowing Garrosh Hellscream to keep a close watch on his people.'
		},
		{
			id: 1,
			name: 'Tauren',
			color: '#250a03',
			crest: TaurenCrest,
			mainBackground: MainTaurenBackground,
			mainCharacter: MainTaurenCharacter,
			pageRaceBackground: PageRaceTaurenBackground,
			homeZoneImage: HomeZoneImageTauren,
			homeCityImage: HomeCityImageTauren,
			quote: 'WALK WITH THE EARTH MOTHER!',
			title: 'Honorable Conservationists',
			description: 'The peaceful tauren—known in their own tongue as the shu’halo—have long dwelled in Kalimdor, striving to preserve the balance of nature at the behest of their goddess, the Earth Mother. Until recently, the tauren lived as nomads scattered throughout the Barrens, hunting the great kodo beasts native to the arid region.',
			history: 'During the Third War, the mighty tauren chieftain Cairne Bloodhoof had a chance encounter with the orcish Horde that explored Kalimdor. After befriending Warchief Thrall, Cairne and his tribe were able to fend off their enemies while they made a new home in Mulgore; the city of Thunder Bluff. Owing a debt to the orcs for their assistance, the tauren joined Thrall on Mount Hyjal to defend Kalimdor from the demons of the Burning Legion. For years the tauren flourished throughout Mulgore, but tragedy befell them following the campaign against the Lich King in Northrend. Believing that the reckless new warchief, Garrosh Hellscream, would lead the Horde to ruin, Cairne challenged the young orc to a duel. The tauren chieftain clearly had the upper hand... However, unbeknownst to either of the duel’s combatants, Magatha Grimtotem, a tauren matriarch who harbored great contempt for Cairne, had poisoned Garrosh’s blade. The poison paralyzed Cairne, and Garrosh was able to slay him. Magatha’s followers then stormed Thunder Bluff in an attempt to seize it. However, Baine, Cairne’s son, managed to launch a counterattack and retake the tauren capital, banishing Magatha and her followers from tauren lands. Despite the deadly encounter between Cairne and Garrosh, the tauren have not abandoned the Horde. Baine bravely took up the mantle of tauren leadership, and the Highmountain tauren have established a foothold on the growing Legion corruption near the Broken Isles.',
			zone: 'Mulgore',
			zoneDescription: 'After settling in the grasslands of Mulgore, the mighty tauren established the stunning capital of Thunder Bluff. For years afterward the tauren lived amid central Kalimdor’s serene plains, tending to the well-being of their beloved new home. Yet the recent Cataclysm has had disastrous effects on Mulgore. Driven from their dens south of Thunder Bluff, the barbaric quilboar have swarmed across Red Cloud Mesa, encroaching on Camp Narache. Apart from taking numerous tauren captive, the quilboar have caused giant thorned roots to burst from the ground, choking all life from the once-verdant plains. In light of this, the tauren have vowed to drive away the savage creatures and heal the wounds inflicted upon the land before the damage becomes irreparable.',
			city: 'Thunder Bluff',
			cityDescription: 'Established by the wise chieftain Cairne Bloodhoof and his stalwart tribe, Thunder Bluff overlooks the verdant land of Mulgore from atop a series of windswept mesas. Prior to the construction of the capital, the tauren had lived as nomads for countless generations, often under attack by marauding bands of centaur. With Thunder Bluff’s founding, however, the proud and good-spirited race was finally granted a permanent home.Following Cairne’s death in a duel with Warchief Garrosh Hellscream, Thunder Bluff was briefly seized in a coup by Magatha Grimtotem and elements of her tribe. In retaliation, Cairne’s son, Baine, launched a brilliant counterattack using a fleet of zeppelins. After he strategically divided Magatha’s forces, Baine recaptured Thunder Bluff and assumed his role as the high chieftain of the tauren. Having recovered from the recent unrest, the capital is once again a bastion of peace and security for Kalimdor’s tauren.'
		},
		{
			id: 2,
			name: 'Troll',
			color: '#141215',
			crest: TrollCrest,
			mainBackground: MainTrollBackground,
			mainCharacter: MainTrollCharacter,
			pageRaceBackground: PageRaceTrollBackground,
			homeZoneImage: HomeZoneImageTroll,
			homeCityImage: HomeCityImageTroll,
			quote: 'You come get da Voodoo',
			title: 'Mystical Conspirators',
			description: 'The savage trolls of Azeroth are infamous for their cruelty, dark mysticism, and seething hatred for all other races. Yet one exception among the trolls is the Darkspear tribe. Plagued by a history of subservience and exile, this proud tribe was on the brink of extinction when Warchief Thrall and his mighty Horde forces were driven to the trolls’ remote island home in the South Seas during a violent storm.',
			history: "The Darkspear trolls, led by wise Sen'jin, abandoned their prejudices and bravely fought side by side with the Horde to defeat a group of humans encroaching on their jungle isle. However, the Darkspears were soon driven from the island by a frenzied band of murlocs intent on appeasing a mysterious sea witch. In the frenzy, Sen’jin was slain. Thrall welcomed the Darkspears into the Horde and gave them a new home along the coastline of Durotar; the Echo Isles. But misfortune struck again; the witch doctor Zalazane betrayed his fellow tribespeople, enslaving them as mindless servants and forcing the Darkspears to fight for their new home.  Following the Horde’s victory against the Lich King in Northrend, Vol’jin allied with the ancestral loa—powerful spirits worshipped by the trolls—and secured victory over the Echo Isles. When the brash orc Garrosh was named warchief and openly showed his disdain for the Darkspear, many disillusioned trolls abandoned the Horde capital, Orgrimmar. Garrosh’s betrayals and crimes against the other Horde races led to his deposition at the hands of Thrall, who named Vol’jin as the new warchief. Vol’jin’s reign as warchief was marked by conflict. In the aftermath of Garrosh's deposition, the treacherous orc colluded with a rogue member of the Bronze Dragonflight to open a portal to a past Draenor, where he helped a newly forming Iron Horde stage an assault on Azeroth. Vol'jin led the Darkspear and the Horde through the Dark Portal, ending this threat. Unbeknownst to them, the warlock Gul'dan escaped to Azeroth, intent on opening the ancient Tomb of Sargeras to allow the Burning Legion to invade Azeroth. At the brutal Battle for Broken Shore, Vol'jin was mortally wounded. Though he was hailed as a hero, his loss was a terrible blow to the Darkspear. Since Vol’jin’s death, the trolls’ deserved place within the Horde has only strengthened, and they stand ready to face anything that might threaten it.",
			zone: 'Echo Isles',
			zoneDescription: 'The Echo Isles are a small cluster of tropical landmasses located near the arid coast of Durotar. In addition to being the home of the Darkspear trolls, the archipelago teems with raptors, tigers, and other dangerous predators. Yet the hostile wildlife is the least of the tribe’s worries. Although the Darkspears have liberated the Echo Isles from Zalazane, a mysterious sea witch has recently appeared and begun using her dark sorcery to destroy the trolls’ way of life. Additionally, naga have overtaken territory just north of Darkspear Isle, the seat of power for the tribe. Having been exiles throughout their history, the Darkspears are prepared to make any sacrifice in order to protect their home. Even now, a new generation of fearless trolls is training on Darkspear Isle, ready to give its lives for the future of the tribe.',
			city: 'Darkspear Isle',
			cityDescription: "Ever since defeating the traitorous witch doctor Zalazane, the Darkspear tribe has worked tirelessly to fortify their home on Darkspear Isle. Covered in a network of huts and bridges, this jungle island has become a symbol of the tribe’s glory, albeit at a time when the trolls’ destiny remains uncertain due to the shocking loss of their leader, Vol'jin. Regardless, the Darkspear tribe has vowed to stand firm and face whatever challenges lie ahead."
		},
		{
			id: 3,
			name: 'Forsaken',
			crest: ForsakenCrest,
			page: '/about/forsaken'
		},
		{
			id: 4,
			name: 'Blood Elves',
			crest: BloodElvesCrest,
			page: '/about/blood_elf'
		},
		{
			id: 5,
			name: 'Goblin',
			crest: GoblinCrest,
			page: '/about/goblin'
		}
    ]
}

const allianceRacesPageReducer = () => {
	return [
		{
			id: 0,
			name: 'Human',
			crest: TrollCrest,
			page: '/about/troll'
		},
		{
			id: 1,
			name: 'Night Elf',
			crest: ForsakenCrest,
			page: '/about/forsaken'
		},
	]
}

const hordeRacesListReducer = () => {
	return [
		{
			id: 0,
			race: 'Orc',
			crest: OrcCrest,
			page: '/about/races'
		},
		{
			id: 1,
			race: 'Tauren',
			crest: TaurenCrest,
			page: '/about/races'
		},
		{
			id: 2,
			race: 'Troll',
			crest: TrollCrest,
			page: '/about/races'
		},
		{
			id: 3,
			race: 'Forsaken',
			crest: ForsakenCrest,
			page: '/about/races'
		},
		{
			id: 4,
			race: 'Blood Elves',
			crest: BloodElvesCrest,
			page: '/about/races'
		},
		{
			id: 5,
			race: 'Goblin',
			crest: GoblinCrest,
			page: '/about/races'
		}
	]
}

const allianceRacesListReducer = () => {
	return [
			{
				id: 0,
				race: 'Human',
				crest: HumanCrest,
				page: 'about/human'
			},
			{
				id: 1,
				race: 'Dwarf',
				crest: DwarfCrest,
				page: 'about/dwarf'
			},
			{
				id: 2,
				race: 'Night Elf',
				crest: NightElfCrest,
				page: 'about/nightElf'
			},
			{
				id: 3,
				race: 'Gnome',
				crest: GnomeCrest,
				page: 'about/gnome'
			},
			{
				id: 4,
				race: 'Draenei',
				crest: DraeneiCrest,
				page: 'about/draenei'
			},
			{
				id: 5,
				race: 'Worgen',
				crest: WorgenCrest,
				page: 'about/WorgenCrest'
			},
	]
}

const selectedRaceReducer = (selectedRace = null, action) => {
    if( action.type === 'RACE_SELECTED' ){
        return action.race
    }
    return selectedRace;
}

export default combineReducers({
	hordeRaces: hordeRacesPageReducer,
	allianceRaces: allianceRacesPageReducer,
	hordeRacesList: hordeRacesListReducer,
	allianceRacesList: allianceRacesListReducer,
	selectedRace: selectedRaceReducer
})