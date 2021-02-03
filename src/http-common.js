import axios from 'axios';


export default axios.create({
    baseURL: 'http://localhost:8000',
    responseType: 'json',
    headers:{
        "content-type":"application/json",
        "Access-Control-Allow-Origin": "*"
    }

})