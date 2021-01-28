import { combineReducers } from 'redux';
import hordeRacesPageReducers from './hordeRacesPageReducer';
import allianceRacesPageReducer from './allianceRacesPageReducer';
import { hordeRacesListReducer } from './racesCrestReducer';
import { allianceRacesListReducer } from './racesCrestReducer';
import { selectedRaceReducer } from './racesCrestReducer';
import { rolesPageReducer } from './rolesPageReducer';
import { rolesCrestList } from './rolesCrestReducer';
import { selectedRole } from './rolesCrestReducer';

const selectedFactionReducer = (selectedFaction = 'Horde', action) => {
    if( action.type === 'FACTION_SELECTED' ){
		return action.payload
    }
	return selectedFaction;
}

export default combineReducers({
	hordeRaces: hordeRacesPageReducers,
	hordeRacesList: hordeRacesListReducer,
	allianceRaces: allianceRacesPageReducer,
	allianceRacesList: allianceRacesListReducer,
	selectedRace: selectedRaceReducer,
	roles: rolesPageReducer,
	rolesList: rolesCrestList,
	selectedRole: selectedRole,
	selectedFaction: selectedFactionReducer,
})