import { TodoContext } from 'context/TodoContext';
import { FormEvent, useCallback, useContext, useState } from 'react';

type Props = {};

const TodoAddForm = (props: Props) => {
    const { createTodo } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState('');
    const onChange = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!newTodo.replaceAll(' ', '')) return; //''or공백만 추가하는 경우
            createTodo(newTodo);
            setNewTodo('');
        },
        [createTodo, newTodo]
    );
    return (
        <form className='flex mt-4' onSubmit={onChange}>
            <input
                className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker focus:outline-1 focus:outline-primary'
                placeholder='할일을 추가해보세요~'
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo}
                data-testid='new-todo-input'
            />
            <button
                className='flex-no-shrink p-2  text-primary font-bold border-2 rounded text-teal border-primary hover:text-white hover:bg-primary whitespace-nowrap'
                type='submit'
                data-testid='new-todo-add-button'
            >
                추가
            </button>
        </form>
    );
};

export default TodoAddForm;
