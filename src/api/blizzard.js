import React from 'react';
import axios from 'axios';

const clientId = 'efe977f03e854dd8bac5fb0d9af4ebf9';
const clientSecret = 'akuZumy1j5dWNt7gtNuwgd63Bms6jppD';

export default axios.create({
    baseURL: "https://us.battle.net/oauth/token",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video', //Ignora playlists no retorno da busca e apresenta apenas videos
        key: KEY,
    }
});



