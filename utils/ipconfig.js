import Constants from "expo-constants";
const { manifest } = Constants;
import axios from 'axios';
const devApi = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
    ? manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
    : `api.example.com`;

const Api = "checkbackserver.herokuapp.com";
axios.defaults.baseURL = `https://${Api}`;

export default axios;