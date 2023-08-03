import { fetchSignin } from 'apis';
import useToken from 'hooks/useToken';
import { cn, validate } from 'lib/utils';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const { token, setToken } = useToken();
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [focus, setFocus] = useState(false);
    const navigate = useNavigate();
    const emailValid = validate(loginData.email, 'email');
    const passwordValid = validate(loginData.password, 'password');
    const submitOk = emailValid.isOk && passwordValid.isOk;

    const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const key = e.target.name;
        setLoginData((state) => ({
            ...state,
            [key]: e.target.value,
        }));
    }, []);

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            fetchSignin(loginData).then((res) => {
                setToken(res.data['access_token']);
                navigate('/todo', { replace: true });
            });
        },
        [loginData, setToken]
    );

    if (token) return <Navigate to='/todo' />;

    return (
        <div className='bg-grey-lighter text-base text-grey-darkest font-normal relative'>
            <div className='h-2 bg-primary mb-20'></div>
            {token}
            <div className='p-6'>
                <div className='mx-auto max-w-sm container'>
                    <div className='bg-white rounded shadow  '>
                        <div className='border-b py-8 font-bold text-black text-center text-2xl tracking-widest uppercase '>
                            로그인
                        </div>

                        <form
                            className='bg-grey-lightest px-8 py-10'
                            onSubmit={onSubmit}
                        >
                            <div className='mb-3'>
                                <span className='block text-xs text-red-600 h-[16px] mb-1'>
                                    {focus && emailValid.message}
                                </span>
                                <input
                                    className={cn(
                                        'border w-full py-2 px-3 focus:outline-primary rounded',
                                        focus &&
                                            !emailValid.isOk &&
                                            'border-red-400'
                                    )}
                                    name='email'
                                    type='text'
                                    placeholder='E-Mail'
                                    onChange={onChangeInput}
                                    onFocus={() => setFocus(true)}
                                />
                            </div>
                            <div className='mb-6'>
                                <span className='block text-xs text-red-600 h-[16px] mb-1'>
                                    {focus && passwordValid.message}
                                </span>
                                <input
                                    className={cn(
                                        'border w-full py-2 px-3 focus:outline-primary rounded',
                                        focus &&
                                            !passwordValid.isOk &&
                                            'border-red-400'
                                    )}
                                    name='password'
                                    type='password'
                                    placeholder='**************'
                                    onChange={onChangeInput}
                                    onFocus={() => setFocus(true)}
                                />
                            </div>
                            <div className='flex'>
                                <button
                                    disabled={!submitOk}
                                    type='submit'
                                    className={cn(
                                        'bg-primary hover:bg-primary-dark w-full p-4 text-sm text-white uppercase font-bold tracking-wider',
                                        !submitOk && ' bg-gray-400'
                                    )}
                                >
                                    로그인
                                </button>
                            </div>
                        </form>

                        <div className='border-t p-6'>
                            <div className='flex justify-between'>
                                <p className='text-grey-darkest hover:text-black no-underline'>
                                    계정이 없으신가요?
                                </p>
                                <Link
                                    to='/signup'
                                    className='font-bold text-primary hover:text-primary-dark no-underline'
                                >
                                    회원가입
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
