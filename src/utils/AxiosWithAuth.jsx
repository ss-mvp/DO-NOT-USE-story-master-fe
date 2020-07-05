import axios from "axios";

export const AxiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://ss-mvp-be.herokuapp.com/',
        headers: {
            Authorization: token
        }
    });
};