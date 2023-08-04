import { cn } from 'lib/utils';
import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';
import Nav from './Nav';

type Props = {
    children: ReactNode;
    className?: ClassNameValue;
};

const Layout = ({ children, className }: Props) => {
    return (
        <div
            className={cn(
                'bg-grey-lighter text-base text-grey-darkest font-normal relative',
                className
            )}
        >
            <div className='h-2 bg-primary'></div>
            <Nav />
            <div className='mx-auto bg-white rounded shadow p-6 w-full pb-5 mt-0  sm:min-h-[200px] sm:mt-20 sm:max-w-lg'>
                {children}
            </div>
        </div>
    );
};

export default Layout;
