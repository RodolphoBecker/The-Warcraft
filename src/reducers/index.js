import { combineReducers } from 'redux';
import hordeRacesPageReducers from './hordeRacesPageReducer';
import { hordeRacesListReducer } from './racesCrestReducer';
import { allianceRacesListReducer } from './racesCrestReducer';
import { selectedRaceReducer } from './racesCrestReducer';


export default combineReducers({
	hordeRaces: hordeRacesPageReducers,
	hordeRacesList: hordeRacesListReducer,
	allianceRacesList: allianceRacesListReducer,
	selectedRace: selectedRaceReducer
})