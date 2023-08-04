import axios from 'axios';
import { Auth, Todo } from 'types';

export {};

export const fetchSignup = async (data: Auth): Promise<any> => {
    return await axios.post('/api/auth/signup', data).then((res) => res);
};
export const fetchSignin = async (
    data: Auth
): Promise<{ access_token: string }> => {
    return await axios.post('/api/auth/signin', data).then((res) => res.data);
};

export const fetchCreateTodo = async (todo: string): Promise<Todo[]> => {
    console.log('fetchCreateTodo', todo);
    return await axios.post('/api/todos', { todo }).then((res) => res.data);
};
export const fetchGetTodos = async (token?: string): Promise<Todo[]> => {
    return await axios.get('/api/todos').then((res) => res.data);
};
export const fetchUpdateTodo = async (todo: Todo): Promise<Todo> => {
    console.log('fetchUpdateTodo');
    return await axios
        .put('/api/todos/' + todo.id, todo)
        .then((res) => res.data);
};
export const fetchDeleteTodo = async (id: number): Promise<any> => {
    return await axios.delete('/api/todos/' + id).then((res) => {
        console.log(res.data);
        return null;
    });
};
