import Layout from 'components/Layout';
import TodoAddForm from 'components/todo/CreateForm';
import TodoList from 'components/todo/TodoList';
import TodoContextProvider from 'context/TodoContextProvider';

type Props = {};

const TodoPage = (props: Props) => {
    return (
        <Layout>
            <TodoContextProvider>
                <TodoAddForm />
                <TodoList />
            </TodoContextProvider>
        </Layout>
    );
};

export default TodoPage;
