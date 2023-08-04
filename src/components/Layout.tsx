import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className='bg-grey-lighter text-base text-grey-darkest font-normal relative'>
            <div className='h-2 bg-primary mb-20'></div>

            <div className='mx-auto container bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg'>
                {children}
            </div>
        </div>
    );
};

export default Layout;
