import MainOrcBackground from '../assets/background-internal-orc.jpg';
import MainOrcCharacter from '../assets/image-orc-character.png';
import PageRaceOrcBackground from '../assets/background-orc.jpg';
import HomeZoneImageOrc from '../assets/background-durotar.jpg';
import HomeCityImageOrc from '../assets/background-orgrimmar.jpg';

const allianceRacesPageReducer = () => {
    return [
        {
			id: 0,
			faction: 'Alliance',
			name: 'Human',
			color: '#250a03',
			mainBackground: MainOrcBackground,
			mainCharacter: MainOrcCharacter,
			pageRaceBackground: PageRaceOrcBackground,
			homeZoneImage: HomeZoneImageOrc,
			homeCityImage: HomeCityImageOrc,
			quote: "King's honor, friend.",
			title: 'Defenders of the Kingdom',
			description: 'Recent discoveries have shown that humans are descended from the barbaric vrykul, half-giant warriors who live in Northrend. Early humans were primarily a scattered and tribal people for several millennia, until the rising strength of the troll empire forced their strategic unification. Thus the nation of Arathor was formed, along with its capital, the city-state of Strom.',
			history: "After centuries of peace, the increasingly independent city-states of Arathor split into kingdoms: Gilneas to the west, Alterac, Dalaran, and Lordaeron to the northwest, Kul Tiras to the southwest, and Stormwind to the far south. Strom itself was renamed Stromgarde and remained a powerful kingdom. But disaster struck when the orcish Horde appeared on Azeroth and reduced Stormwind to ruins. The city’s survivors, including the young prince, Varian Wrynn, fled to Lordaeron, where the leaders of the seven kingdoms resolved to unify once again in the Alliance of Lordaeron. Together, they succeeded in defeating the Horde. But peace for the Alliance would only prove to be temporary. As upkeep costs rose, Gilneas and Stromgarde withdrew their kingdoms from the Alliance. Then came a plague that killed thousands of humans and converted them into undead servants of the Lich King. Lordaeron’s prince, Arthas Menethil, was manipulated by the Lich King, leading Arthas to kill his own father and journey to Northrend, where he merged with his master and became the next Lich King. For the next five years, Arthas remained in Northrend, plotting and building up his armies. But before Arthas could unleash his gathered power, humans and other other races banded together, securing a costly victory. Members of the Horde and the Alliance launched separate campaigns in Northrend, and their efforts resulted in the Lich King’s defeat. The kingdom of Stormwind has become the strongest bastion of humanity and the most powerful force in the now multi-racial Alliance. Now, the people of Stormwind hold fast to the principles of honor and justice as they defend their settlements and their allies.",
			zone: 'Elwynn Forest',
			zoneDescription: 'The peaceful woodlands to the south of Stormwind City seem more tranquil than ever since the fall of the Defias Brotherhood, but the inhabitants of Elwynn Forest are hardly idle. There are fields to sow, mines to work, and lumber to harvest. For all its pomp and grandeur, Stormwind wouldn’t last long without a constant stream of food and supplies to support the city’s population. This exchange has become increasingly threatened by kobold invasions, vicious feuds among farmers, and attacks from wild animals. Northshire Abbey remains dedicated to recruiting and training any adventurers brave enough to help keep the peace. Likewise, the Blackrock orcs are gathering their forces in the nearby Redridge Mountains. With Stormwind’s militia stretched thinner than ever, these renegade orcs stand ready to finally annihilate their old human enemies in Elwynn Forest.',
			city: 'Stormwind City',
			cityDescription: 'No city better demonstrates human determination than Stormwind. Destroyed during the Horde’s initial invasion of Azeroth, Stormwind was painstakingly reconstructed by the Stonemasons’ Guild after the Second War. Parts of the city were razed again when Deathwing, the corrupted black Dragon Aspect, brutally attacked Stormwind, but the other undamaged districts are more beautiful than ever thanks to their hardworking inhabitants. From the magnificent Cathedral of Light, which serves as a major spiritual hub, to the awe-inspiring Valley of Heroes, which commemorates the sacrifices of Stormwind’s loyal champions, the city truly represents the courageous heart of humanity.'
		},
    ]
}

export default allianceRacesPageReducer;