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
            result.message = '비밀번호를 입력해주세요.';
        } else if (value.length < 8) {
            result.message = '비밀번호는 8자 이상이여야 합니다.';
        } else {
            result.isOk = true;
            result.message = '';
        }
    }
    return result;
};

export const objEqual = (obj1: object, obj2: object) =>
    JSON.stringify(obj1) === JSON.stringify(obj2);
