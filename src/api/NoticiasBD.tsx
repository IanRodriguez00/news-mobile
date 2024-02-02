import axios from 'axios';
const noticiasDB = axios.create({
    baseURL: 'https://newsapi.org/v2',
    params:{
        contry: 'us',
        category:'business',
        apiKey:'af4f44594b9d40129314ac0f07e406d2',
    },
});
export default noticiasDB;