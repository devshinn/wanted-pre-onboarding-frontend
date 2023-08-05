import Auth from 'auth/Auth';
import NotFound from 'pages/NotFound';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import TodoPage from 'pages/TodoPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Auth option={true} />}>
                    <Route path='/' element={<Navigate to='/todo' replace />} />
                    <Route path='/todo' element={<TodoPage />} />
                </Route>

                <Route element={<Auth option={false} />}>
                    <Route path='/signin' element={<SignInPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                </Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
