import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

export const validate = (value: string, type: 'email' | 'password') => {
    const result = { isOk: false, message: '' };
    if (type === 'email') {
        if (value.length === 0) {
            result.message = '이메일을 입력해주세요.';
            return result;
        } else if (!value.includes('@')) {
            result.message = '유효한 이메일을 입력해주세요.';
            return result;
        } else {
            result.isOk = true;
            result.message = '';
        }
    }
    if (type === 'password') {
        if (value.length === 0) {
            result.message = '패스워드를 입력해주세요.';
        } else if (value.length < 8) {
            result.message = '패스워드는 8자 이상이여야 합니다.';
        } else {
            result.isOk = true;
            result.message = '';
        }
    }
    return result;
};
