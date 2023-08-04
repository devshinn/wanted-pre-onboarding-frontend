import { ReactNode, useCallback, useEffect, useState } from 'react';

import {
    fetchCreateTodo,
    fetchDeleteTodo,
    fetchGetTodos,
    fetchUpdateTodo,
} from 'apis';
import axios from 'axios';
import useToken from 'hooks/useToken';
import { Todo } from 'types';
import { TodoContext } from './TodoContext';

export default function TodoContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [todos, setTodos] = useState<Todo[]>([]);
    const { token } = useToken();

    useEffect(() => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Authorization'] = token
            ? `Bearer ${token}`
            : null;
        getTodos();
    }, [token]);

    const getTodos = useCallback(() => {
        if (!token) return;

        fetchGetTodos().then(setTodos);
    }, [token]);

    const createTodo = useCallback(
        async (todo: string) => {
            if (!token) return;
            const data = await fetchCreateTodo(todo);
            getTodos();

            return data;
        },
        [token, getTodos]
    );

    const deleteTodo = useCallback(
        async (todoId: number) => {
            if (!token) return;

            const data = await fetchDeleteTodo(todoId);
            getTodos();

            return data;
        },
        [token, getTodos]
    );

    const updateTodo = useCallback(
        async (todo: Todo) => {
            if (!token) return;

            const data = await fetchUpdateTodo(todo);
            getTodos();

            return data;
        },
        [token, getTodos]
    );

    return (
        <TodoContext.Provider
            value={{ todos, createTodo, deleteTodo, updateTodo }}
        >
            {children}
        </TodoContext.Provider>
    );
}
