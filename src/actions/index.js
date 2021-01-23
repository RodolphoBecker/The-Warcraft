export const selectRace = (race) => {
    return{
        type: 'RACE_SELECTED',
        payload: race,
    }
}