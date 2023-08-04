import { ReactNode, useCallback, useEffect, useState } from 'react';

import {
    fetchCreateTodo,
    fetchDeleteTodo,
    fetchGetTodos,
    fetchUpdateTodo,
} from 'apis';
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
        if (!token) return;
        getTodos();
    }, [token]);

    const getTodos = useCallback(async () => {
        if (!token) return;

        await fetchGetTodos(token).then(setTodos);
    }, [token]);

    const createTodo = useCallback(
        async (todo: string) => {
            if (!token) return;
            const data = await fetchCreateTodo(token, todo);
            getTodos();

            return data;
        },
        [token, getTodos]
    );

    const deleteTodo = useCallback(
        async (todoId: number) => {
            if (!token) return;
            // eslint-disable-next-line no-restricted-globals
            if (confirm('삭제 하시겠습니까?')) {
                const data = await fetchDeleteTodo(token, todoId);
                getTodos();

                return data;
            }
        },
        [token, getTodos]
    );

    const updateTodo = useCallback(
        async (todo: Todo) => {
            if (!token) return;

            const data = await fetchUpdateTodo(token, todo);
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
