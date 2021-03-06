import './styles/RacesCrestList.css';
import React, {} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectRace } from '../actions';
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
	const hordeRacesList = [
		{
			id: 0,
			race: 'Orc',
			crest: OrcCrest,
			page: '/about/races/horde'
		},
		{
			id: 1,
			race: 'Tauren',
			crest: TaurenCrest,
			page: '/about/races/horde'
		},
		{
			id: 2,
			race: 'Troll',
			crest: TrollCrest,
			page: '/about/races/horde'
		},
		{
			id: 3,
			race: 'Forsaken',
			crest: ForsakenCrest,
			page: '/about/races/horde'
		},
		{
			id: 4,
			race: 'Blood Elves',
			crest: BloodElvesCrest,
			page: '/about/races/horde'
		},
		{
			id: 5,
			race: 'Goblin',
			crest: GoblinCrest,
			page: '/about/races/horde'
		}
	];

	const mappedHordeRaces = hordeRacesList.map((race) => {
		var emptySpace = '';
		
		if (props.pageId === race.id) {
			emptySpace = 'd-none'
		}

		return(
			<div key={race.id} className={`col-12 col-lg-4 ${emptySpace}`} style={{ textAlign: "center" }}>
				<Link to={race.page}>
					<button onClick={() => props.selectRace(race.id)} className="crest-button default-hover">
						<img className="img-fluid" alt={race.race} src={race.crest}></img>
					</button>
				</Link>
				<div className="race main-text">
					<p style={{ textTransform: "uppercase" }}>{race.race}</p>
				</div>
			</div>
		);
	});

	const allianceRacesList = [
		{
			id: 0,
			race: 'Human',
			crest: HumanCrest,
			page: '/about/races/alliance'
		},
		{
			id: 1,
			race: 'Dwarf',
			crest: DwarfCrest,
			page: '/about/races/alliance'
		},
		{
			id: 2,
			race: 'Night Elf',
			crest: NightElfCrest,
			page: '/about/races/alliance'
		},
		{
			id: 3,
			race: 'Gnome',
			crest: GnomeCrest,
			page: '/about/races/alliance'
		},
		{
			id: 4,
			race: 'Draenei',
			crest: DraeneiCrest,
			page: '/about/races/alliance'
		},
		{
			id: 5,
			race: 'Worgen',
			crest: WorgenCrest,
			page: '/about/races/alliance'
		},
	];

	const mappedAllianceRaces = allianceRacesList.map((race) => {
		var emptySpace = '';
		
		if (props.pageId === race.id) {
			emptySpace = 'd-none'
		}

		return(
			<div key={race.id} className={`col-12 col-lg-4 ${emptySpace}`} style={{ textAlign: "center" }}>
				<Link to={race.page}>
					<button onClick={()=> props.selectRace(race.id)} className="crest-button default-hover">
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

const mapStateToProps = (state) => {
	return {selectRace: selectRace}
}

export default connect(mapStateToProps, {
	selectRace: selectRace
})(RacesCresList);
