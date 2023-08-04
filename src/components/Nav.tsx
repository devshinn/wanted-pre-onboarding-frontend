import useToken from 'hooks/useToken';

const Nav = () => {
    const { delToken } = useToken();
    return (
        <div className='flex justify-between w-full mb-20 px-10 items-center py-3 border-b border-gray-100 shadow'>
            <h1 className='text-2xl text-bold text-primary'>My Todo</h1>
            <button
                onClick={delToken}
                type='button'
                className='text-sm font-bold'
            >
                로그아웃
            </button>
        </div>
    );
};

export default Nav;
