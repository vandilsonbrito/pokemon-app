import axios from "axios"

const apiURL = import.meta.env.VITE_POKEMON_TCG_API_URL;
const apiKey = import.meta.env.VITE_POKEMON_TCG_API_KEY;

export const api = axios.create({
    baseURL: apiURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    }
})