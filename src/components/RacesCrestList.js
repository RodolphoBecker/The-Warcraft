import './styles/RacesCrestList.css';
import React, {} from 'react';
import { Link } from 'react-router-dom';
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

const RacesCresList = (props) => {
	
	const hordeRaces = [
		{
			id: 0,
			race: 'Orc',
			crest: OrcCrest,
			page: 'about/orc'
		},
		{
			id: 1,
			race: 'Tauren',
			crest: TaurenCrest,
			page: '/about/tauren'
		},
		{
			id: 2,
			race: 'Troll',
			crest: TrollCrest,
			page: '/about/troll'
		},
		{
			id: 3,
			race: 'Forsaken',
			crest: ForsakenCrest,
			page: '/about/forsaken'
		},
		{
			id: 4,
			race: 'Blood Elves',
			crest: BloodElvesCrest,
			page: '/about/blood_elf'
		},
		{
			id: 5,
			race: 'Goblin',
			crest: GoblinCrest,
			page: '/about/goblin'
		}
	]

	const allianceRaces = [
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

	const mappedHordeRaces = hordeRaces.map((race) => {
		var emptySpace = '';
		
		if (race.id === props.racePage) {
			emptySpace = 'd-none'
		}
		
		return(
			<div key={race.id} className={`col-12 col-lg-4 ${emptySpace}`} style={{ textAlign: "center" }}>
				<Link to={race.page}>
					<button className="crest-button default-hover">
						<img className="img-fluid" alt={race.race} src={race.crest}></img>
					</button>
				</Link>
				<div className="race main-text">
					<p style={{ textTransform: "uppercase" }}>{race.race}</p>
				</div>
			</div>
		);
	});

	const mappedAllianceRaces = allianceRaces.map((race) => {
		var emptySpace = '';
		
		if (race.id === props.racePage) {
			emptySpace = 'd-none'
		}
		
		return(
			<div key={race.id} className={`col-12 col-lg-4 ${emptySpace}`} style={{ textAlign: "center" }}>
				<Link to={race.page}>
					<button className="crest-button default-hover">
						<img className="img-fluid" alt={race.race} src={race.crest}></img>
					</button>
				</Link>
				<div className="race main-text">
					<p style={{ textTransform: "uppercase" }}>{race.race}</p>
				</div>
			</div>
		);
	});
	
	return(
		<React.Fragment>
			{props.races === 'Horde' ? mappedHordeRaces :  mappedAllianceRaces}
		</React.Fragment>
	);
	
}

export default RacesCresList;