import axios from 'axios';

export default axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines",
    headers: {
        "X-Api-Key": "6879d8fedd294801894cf06b10c6719d"
    }
})