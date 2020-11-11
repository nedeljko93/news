import axios from 'axios';

export default axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
        "X-Api-Key": "bb40ba9081894415b5f0a7e25a70914b"
    }
})