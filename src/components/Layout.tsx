import { ReactNode } from 'react';
import Nav from './Nav';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className='bg-grey-lighter text-base text-grey-darkest font-normal relative'>
            <div className='h-2 bg-primary'></div>
            <Nav />
            <div className='mx-auto container bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg min-h-[200px] pb-5'>
                {children}
            </div>
        </div>
    );
};

export default Layout;
