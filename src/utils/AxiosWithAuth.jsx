import axios from "axios";

export const AxiosWithAuth = () => {
    const baseUrl = process.env.REACT_APP_FE_ENV === 'development' ? 'http://localhost:5000/' : 'https://ss-mvp.herokuapp.com/'
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: baseUrl,
        headers: {
            Authorization: token
        }
    });
};
