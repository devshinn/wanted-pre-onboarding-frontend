import { useEffect, useRef, useState } from 'react';
import { Todo } from 'types';

type Props = {
    todo: Todo;
    setTodo: React.Dispatch<React.SetStateAction<Todo>>;
    setEditOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateForm = ({ todo, setTodo, setEditOn }: Props) => {
    const [newTodo, setNewTodo] = useState(todo.todo);
    const editRef = useRef<HTMLInputElement | null>(null);
    const onClickBtn = () => {
        setTodo((state) => ({ ...state, todo: newTodo }));
        setEditOn(false);
    };
    useEffect(() => {
        editRef.current?.focus();
    }, []);
    return (
        <div className='flex'>
            <input
                className='w-full focus:outline-none border-b-2 border-primary'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                data-testid='modify-input'
                ref={editRef}
            />
            <button
                className=' whitespace-nowrap px-1 text-primary'
                onClick={onClickBtn}
                data-testid='submit-button'
            >
                제출
            </button>
            <button
                className=' whitespace-nowrap px-1 text-red-500'
                onClick={() => setEditOn(false)}
                data-testid='cancel-button'
            >
                취소
            </button>
        </div>
    );
};

export default UpdateForm;
