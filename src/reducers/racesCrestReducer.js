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

export const hordeRacesListReducer = () => {
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

export const allianceRacesListReducer = () => {
	return [
			{
				id: 0,
				race: 'Human',
				crest: HumanCrest,
				page: 'about/races'
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

export const selectedRaceReducer = (selectedRace = 0, action) => {
    if( action.type === 'RACE_SELECTED' ){
		return selectedRace = action.payload
    }
	return selectedRace;
}
