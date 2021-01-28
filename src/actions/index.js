export const selectRace = (race) => {
    return{
        type: 'RACE_SELECTED',
        payload: race,
    }
}

export const selectRole = (role) => {
    return{
        type: 'ROLE_SELECTED',
        payload: role,
    }
}

export const selectFaction = (faction) => {
    return{
        type: 'FACTION_SELECTED',
        payload: faction,
    }
}