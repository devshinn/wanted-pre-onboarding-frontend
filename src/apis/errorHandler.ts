import { AxiosError } from 'axios';

export const errorHandler = (error: AxiosError<{ message: 'string' }>) => {
    alert(error.response?.data.message);
};
