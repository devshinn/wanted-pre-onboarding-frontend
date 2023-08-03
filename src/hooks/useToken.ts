// import { useCallback, useState } from 'react';

import { useCallback, useState } from 'react';

function useToken() {
    const [token, setState] = useState(localStorage.getItem('access_token'));
    const setToken = useCallback((value: string) => {
        localStorage.setItem('access_token', value);
        setState(value);
    }, []);

    return { token, setToken };
}
export default useToken;
