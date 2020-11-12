import axios from 'axios';

export default axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
        "X-Api-Key": "3aaf35a44fae48f1991533393d23f598"
    }
})