import axios from "axios";

const instance = axios.create({
    baseURL:`https://cleanease-backendnew.onrender.com/api`
    // timeout:1000
})

export default instance;
