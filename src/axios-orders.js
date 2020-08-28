import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1b39a.firebaseio.com/'
});

export default instance;