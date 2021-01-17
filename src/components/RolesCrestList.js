import './styles/RolesCrestList.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import WarriorCrest from '../assets/roles/crest-warrior.png';
import WarlockCrest from '../assets/roles/crest-warlock.png';
import ShamanCrest from '../assets/roles/crest-shaman.png';
import RogueCrest from '../assets/roles/crest-rogue.png';
import PriestCrest from '../assets/roles/crest-priest.png';
import PaladinCrest from '../assets/roles/crest-paladin.png';
import MonkCrest from '../assets/roles/crest-monk.png';
import MageCrest from '../assets/roles/crest-mage.png';
import HunterCrest from '../assets/roles/crest-hunter.png';
import DruidCrest from '../assets/roles/crest-druid.png';
import DemonHunterCrest from '../assets/roles/crest-demonHunter.png';
import DeathKnight from '../assets/roles/crest-deathKnight.png';


const RolesCrestList = (props) => {
	const[page, setPage] = useState('');

	const roles = [
		{
			id: 0,
			role: 'Warrior',
			crest: WarriorCrest,
			page: '/about/warrior'
		},
		{
			id: 1,
			role: 'Warlock',
			crest: WarlockCrest,
			page: '/about/warlock'
		},
		{
			id: 2,
			role: 'Shaman',
			crest: ShamanCrest,
			page: '/about/shaman'
		},
		{
			id: 3,
			role: 'Rogue',
			crest: RogueCrest,
			page: '/about/rogue'
		},
		{
			id: 4,
			role: 'Priest',
			crest: PriestCrest,
			page: '/about/priest'
		},
		{
			id: 5,
			role: 'Paladin',
			crest: PaladinCrest,
			page: '/about/paladin'
        },
        {
			id: 6,
			role: 'Monk',
			crest: MonkCrest,
			page: '/about/monk'
        },
        {
			id: 7,
			role: 'Mage',
			crest: MageCrest,
			page: '/about/mage'
        },
        {
			id: 8,
			role: 'Hunter',
			crest: HunterCrest,
			page: '/about/hunter'
        },
        {
			id: 9,
			role: 'Druid',
			crest: DruidCrest,
			page: '/about/druid'
        },
        {
			id: 10,
			role: 'Demon Hunter',
			crest: DemonHunterCrest,
			page: '/about/demonHunter'
        },
        {
			id: 11,
			role: 'Death Knight',
			crest: DeathKnight,
			page: '/about/deathKnight'
        },
        
	]

	const mappedRoles = roles.map((role) => {
		var emptySpace = '';
		
		if (role.id === props.rolePage) {
			emptySpace = 'd-none'
		}
		
		return(
			<div key={role.id} className={`col-12 col-lg-2 ${emptySpace}`} style={{ textAlign: "center" }}>
				<Link to={role.page}>
					<button className="crest-button default-hover">
						<img className="img-fluid" alt={role.role} src={role.crest}></img>
					</button>
				</Link>
				<div className="role main-text">
					<p style={{ textTransform: "uppercase" }}>{role.role}</p>
				</div>
			</div>
		);
	});

	return(
		<React.Fragment>
			{mappedRoles}
		</React.Fragment>
	);
}

export default RolesCrestList;