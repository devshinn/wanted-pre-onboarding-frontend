import { Link } from 'react-router-dom';

type Props = {};

export default function NotFound({}: Props) {
    return (
        <div>
            <div className='h-2 bg-primary mb-10'></div>

            <h1 className='text-center mb-5 text-2xl font-bold'>Not Found</h1>
            <Link
                to={'/'}
                className='text-center text-blue-500 block bottom-auto'
            >
                홈으로가기
            </Link>
        </div>
    );
}
