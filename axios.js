import axios from 'axios';
import Constants from 'expo-constants';
const { manifest } = Constants;

axios.defaults.baseURL =
    'http://' + manifest.debuggerHost
            .split(`:`)
            .shift()
            .concat(`:3000`);

console.log('IP: ',axios.defaults.baseURL);

export default axios;