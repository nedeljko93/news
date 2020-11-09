import axios from 'axios';

export default axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
        "X-Api-Key": "810271f0f6494afba7294e99f32d9322"
    }
})