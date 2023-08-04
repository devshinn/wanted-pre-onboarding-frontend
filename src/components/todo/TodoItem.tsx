import { TodoContext } from 'context/TodoContext';
import { objEqual } from 'lib/utils';
import { useContext, useEffect, useState } from 'react';
import { Todo } from 'types';
import UpdateForm from './UpdateForm';

const TodoItem = ({ todo }: { todo: Todo }) => {
    const { updateTodo, deleteTodo } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState(todo);
    const [editOn, setEditOn] = useState(false);
    useEffect(() => {
        if (objEqual(todo, newTodo)) return;
        updateTodo(newTodo);
    }, [newTodo, todo, updateTodo]);
    return (
        <li className='rounded-lg list-none py-1'>
            {!editOn ? (
                <div className='flex align-middle flex-row items-center justify-between'>
                    <input
                        type='checkbox'
                        className='peer h-5 w-5 mr-2'
                        checked={newTodo.isCompleted}
                        onChange={() =>
                            setNewTodo((state) => ({
                                ...state,
                                isCompleted: !todo.isCompleted,
                            }))
                        }
                    />
                    <p className='w-full text-lg text-black peer-checked:text-primary peer-checked:line-through'>
                        {newTodo.todo}
                    </p>
                    <div className='flex text-sm'>
                        <button
                            className='whitespace-nowrap text-primary   px-2 py-1 rounded-lg'
                            type='button'
                            onClick={() => setEditOn(true)}
                            data-testid='modify-button'
                        >
                            수정
                        </button>
                        <button
                            className='whitespace-nowrap text-red-500   px-2 py-1 rounded-lg'
                            type='button'
                            onClick={() => deleteTodo(todo.id)}
                            data-testid='delete-button'
                        >
                            삭제
                        </button>
                    </div>
                </div>
            ) : (
                <UpdateForm
                    todo={newTodo}
                    setTodo={setNewTodo}
                    setEditOn={setEditOn}
                />
            )}
            <hr className='mt-2' />
        </li>
    );
};

export default TodoItem;
