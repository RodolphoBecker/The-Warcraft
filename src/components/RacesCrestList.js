import './styles/RacesCrestList.css';
import React, {} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectRace } from '../actions';

const RacesCresList = (props) => {
	const mappedHordeRaces = props.hordeRacesList.map((race) => {
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

	const mappedAllianceRaces = props.allianceRacesList.map((race) => {
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

const mapStateToProps = (state) => {
	return { hordeRaces: state.hordeRaces, hordeRacesList: state.hordeRacesList, allianceRacesList: state.allianceRacesList}
}

export default connect(mapStateToProps, {
	selectRace: selectRace
})(RacesCresList);
