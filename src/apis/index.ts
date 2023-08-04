import { Auth, Todo } from 'types';
import server from './server';

export {};

export const fetchSignup = async (data: Auth): Promise<any> => {
    return await server.post('/auth/signup', data).then((res) => res);
};
export const fetchSignin = async (
    data: Auth
): Promise<{ access_token: string }> => {
    return await server.post('/auth/signin', data).then((res) => res.data);
};

export const fetchCreateTodo = async (
    token: string,
    todo: string
): Promise<Todo[]> => {
    console.log('fetchCreateTodo', todo, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return await server
        .post(
            '/todos',
            { todo },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((res) => res.data);
};
export const fetchGetTodos = async (token: string): Promise<Todo[]> => {
    return await server
        .get('/todos', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data);
};
export const fetchUpdateTodo = async (
    token: string,
    todo: Todo
): Promise<Todo> => {
    console.log('fetchUpdateTodo');
    return await server
        .put('/todos/' + todo.id, todo, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data);
};
export const fetchDeleteTodo = async (
    token: string,
    id: number
): Promise<any> => {
    return await server
        .delete('/todos/' + id, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            console.log(res.data);
            return null;
        });
};
