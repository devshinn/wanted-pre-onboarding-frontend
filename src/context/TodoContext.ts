import { createContext } from 'react';
import { Todo } from 'types';

export const TodoContext = createContext<{
    todos: Todo[];
    createTodo: (todo: string) => void;
    deleteTodo: (todoId: number) => void;
    updateTodo: (todo: Todo) => void;
}>({
    todos: [],
    createTodo: () => {},
    deleteTodo: () => {},
    updateTodo: () => {},
});
