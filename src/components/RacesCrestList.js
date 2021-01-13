import './styles/RacesCrestList.css';
import React from 'react';
import { Link } from 'react-router-dom';
import OrcCrest from '../assets/crest-horde-orc.png';
import TaurenCrest from '../assets/crest-horde-tauren.png';
import TrollCrest from '../assets/crest-horde-troll.png';
import ForsakenCrest from '../assets/crest-horde-forsaken.png';
import BloodElvesCrest from '../assets/crest-horde-blood-elf.png';
import GoblinCrest from '../assets/crest-horde-goblin.png';

const RacesCresList = (props) => {
	const hordeRaces = [
		{
			id: 0,
			race: 'Orc',
			crest: OrcCrest,
			page: '/about/orc'
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

	return(
		<React.Fragment>
			{mappedHordeRaces}
		</React.Fragment>
	);
}

export default RacesCresList;