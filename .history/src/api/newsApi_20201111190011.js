import axios from 'axios';

export default axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
        "X-Api-Key": "0e81cf8ba3664031b3daccec1cf2a703"
    }
})