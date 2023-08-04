// import { useCallback, useState } from 'react';

import { useCallback, useState } from 'react';

function useToken() {
    const [token, setState] = useState(localStorage.getItem('access_token'));
    const setToken = useCallback((value: string) => {
        localStorage.setItem('access_token', value);
        setState(value);
    }, []);
    const delToken = useCallback(() => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('로그아웃 하시겠습니까?')) {
            localStorage.removeItem('access_token');
            window.location.href = '/signin';
            setState(null);
        }
    }, []);

    return { token, setToken, delToken };
}
export default useToken;
