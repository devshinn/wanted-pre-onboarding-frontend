import axios from 'axios';

const server = axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default server;
