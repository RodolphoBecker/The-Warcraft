import { combineReducers } from 'redux';

const selectedFactionReducer = (selectedFaction = 'Horde', action) => {
    if( action.type === 'FACTION_SELECTED' ){
		return action.payload
    }
	return selectedFaction;
}

const selectedRoleReducer = (selectedRole = 0, action) => {
    if( action.type === 'ROLE_SELECTED' ){
		return selectedRole = action.payload
    }
	return selectedRole;
}

const selectedRaceReducer = (selectedRace = 0, action) => {
    if( action.type === 'RACE_SELECTED' ){
		return selectedRace = action.payload
    }
	return selectedRace;
}

export default combineReducers({
	selectedRace: selectedRaceReducer,
	selectedRole: selectedRoleReducer,
	selectedFaction: selectedFactionReducer,
})