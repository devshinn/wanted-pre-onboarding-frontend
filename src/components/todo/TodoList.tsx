import { TodoContext } from 'context/TodoContext';
import { useContext } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos } = useContext(TodoContext);

    return (
        <ul className='mt-5'>
            {todos
                ?.sort((a, b) => b.id - a.id) //최신순 정렬
                ?.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
        </ul>
    );
};

export default TodoList;
