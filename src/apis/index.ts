import axios from 'axios';
import { Auth } from 'types';

export {};

export const fetchSignup = async (data: Auth) => {
    return await axios.post('/api/auth/signup', data);
};
export const fetchSignin = async (data: Auth) => {
    return await axios.post('/api/auth/signin', data);
};
