import useToken from 'hooks/useToken';

const Nav = () => {
    const { token, delToken } = useToken();
    return (
        <div className='flex justify-between w-full px-10 items-center py-3 border-b border-gray-100 shadow'>
            <h1 className='text-2xl text-bold text-primary'>My Todo</h1>
            {token && (
                <button
                    onClick={delToken}
                    type='button'
                    className='text-sm font-bold'
                >
                    로그아웃
                </button>
            )}
        </div>
    );
};

export default Nav;
