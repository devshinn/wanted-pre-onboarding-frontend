import axios from 'axios';
import useToken from 'hooks/useToken';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

type Props = {
    option?: boolean | null;
};

const Auth = ({ option }: Props) => {
    //option true: 로그인 유저만 접속 가능
    //option false: 로그인 유저는 접속 불가능
    //option null: 로그인 유무x
    const { token } = useToken();

    const navigate = useNavigate();
    useEffect(() => {
        if (option === true && !token) {
            return navigate('/signin', { replace: true });
        } else if (option === false && token) {
            return navigate('/todo', { replace: true });
        }
    }, [token]);

    return <Outlet />;
};

export default Auth;
