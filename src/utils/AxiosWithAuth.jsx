import axios from "axios";

export const AxiosWithAuth = () => {
<<<<<<< HEAD
    const baseUrl = process.env.REACT_APP_FE_ENV === 'development' ? 'http://localhost:5000' : process.env.REACT_APP_BE
=======
    const baseUrl = process.env.REACT_APP_FE_ENV === 'development' ? 'http://localhost:5000' : 'http://ec2-3-226-91-90.compute-1.amazonaws.com'
>>>>>>> countdown-real-time
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: baseUrl,
        headers: {
            Authorization: token
        }
    });
};
