import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params: {
        key: 'dac623758b164ed596b87264d644d000'
    }
})