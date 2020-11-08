import axios from 'axios';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines",
    headers: {
        "X-Api-Key": "3aaf35a44fae48f1991533393d23f598"
    }
})