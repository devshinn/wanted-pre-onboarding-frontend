import Layout from 'components/Layout';
import TodoAddForm from 'components/todo/CreateForm';
import TodoList from 'components/todo/TodoList';
import TodoContextProvider from 'context/TodoContextProvider';

type Props = {};

const TodoPage = (props: Props) => {
    // console.log(todos);
    return (
        <Layout>
            <div>
                <h1 className='text-lg font-bold'>할일 목록</h1>
            </div>
            <TodoContextProvider>
                <TodoAddForm />
                <TodoList />
            </TodoContextProvider>
        </Layout>
    );
};

export default TodoPage;
