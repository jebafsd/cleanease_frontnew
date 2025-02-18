import axios from "axios";

const instance = axios.create({
    baseURL:`https://backendnew-5nc9.onrender.com/api`
    // timeout:1000
})

export default instance;