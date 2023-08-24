import { atom } from 'recoil';

export const loginState = atom({
    key: 'loginState',
    default: false, // 로그인일때는 true, 로그아웃 false
})