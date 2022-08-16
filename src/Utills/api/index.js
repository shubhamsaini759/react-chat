import axios from "axios";

export default axios.create({
    baseURL : 'https://chat-backend-sever.herokuapp.com/',
    headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
    },
})
