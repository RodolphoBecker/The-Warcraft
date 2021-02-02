import './styles/RolesCrestList.css';
import React, {} from 'react';
import { Link } from 'react-router-dom';
import { selectRole } from '../actions/';
import { connect } from 'react-redux';
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

const rolesCrestList = [
	{
		id: 0,
		role: 'Warrior',
		crest: WarriorCrest,
		page: '/about/class'
	},
	{
		id: 1,
		role: 'Warlock',
		crest: WarlockCrest,
		page: '/about/class'
	},
	{
		id: 2,
		role: 'Shaman',
		crest: ShamanCrest,
		page: '/about/class'
	},
	{
		id: 3,
		role: 'Rogue',
		crest: RogueCrest,
		page: '/about/class'
	},
	{
		id: 4,
		role: 'Priest',
		crest: PriestCrest,
		page: '/about/class'
	},
	{
		id: 5,
		role: 'Paladin',
		crest: PaladinCrest,
		page: '/about/class'
	},
	{
		id: 6,
		role: 'Monk',
		crest: MonkCrest,
		page: '/about/class'
	},
	{
		id: 7,
		role: 'Mage',
		crest: MageCrest,
		page: '/about/class'
	},
	{
		id: 8,
		role: 'Hunter',
		crest: HunterCrest,
		page: '/about/class'
	},
	{
		id: 9,
		role: 'Druid',
		crest: DruidCrest,
		page: '/about/class'
	},
	{
		id: 10,
		role: 'Demon Hunter',
		crest: DemonHunterCrest,
		page: '/about/class'
	},
	{
		id: 11,
		role: 'Death Knight',
		crest: DeathKnight,
		page: '/about/class'
	},
]

const RolesCrestList = (props) => {
	console.log(props)
	const mappedRolesList = rolesCrestList.map((role) =>{
		var emptySpace = '';

		if(props.pageIndex === role.id){
			emptySpace = 'd-none';
		}

		return(
			<div key={role.id} className={`col-12 col-lg-2 ${emptySpace}`} style={{ textAlign: "center" }}>
				<Link to={role.page}>
					<button onClick={()=> props.selectRole(role.id)} className="crest-button default-hover">
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
			{mappedRolesList}
		</React.Fragment>
	)
}
const mapStateToProps = (state) => {
	return {selectRole: selectRole}
}
export default connect(mapStateToProps, {
	selectRole: selectRole
})(RolesCrestList);
