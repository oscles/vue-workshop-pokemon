import axios from 'axios';

let url = 'https://gist.githubusercontent.com/coderdiaz/633125b46490f2ffa3b21ebeaa0cf6e2/raw/763b3d6c856010555e92adb889b6b342dfe51063/pokemon.json';


let getPokemon = () => {
    return axios.get(url);
}

export {
    getPokemon
}
