import { useState } from "react";
import { useRouter } from "next/router";

import LoginPageUI from "./login.presenter";

export default function LoginPage() {
    const router = useRouter();

    const [login,setLogin] = useState(false);

    const [nickName,setNickName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidNickName, setIsValidNickName] = useState(true);


    const onClickSignUp = ()=> {
        setLogin((prev) => !prev)
    }

    const onClickSign = ()=> {
        if (isValidPassword && isValidEmail && isValidNickName) {
            setLogin((prev) => !prev);
            alert('축하합니다!! 회원가입이 완료되었습니다!');
            setNickName('');
            setEmail('');
            setPassword('');
          } else {
            alert('정확한 양식을 입력하세요');
          }
    }

    const onClickLogin = ()=> {
        router.push('/')
    }

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      };
    
    const validatePassword = (password) => {
      return password.length >= 8;
    };

    const validateNickName = (nickName) => {
        return nickName.length >= 8; 
      };


    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsValidEmail(validateEmail(newEmail));
    };
    
    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setIsValidPassword(validatePassword(newPassword));
    };

    const handleNickNameChange = (event) => {
        const newNickName = event.target.value;
        setNickName(newNickName);
        setIsValidNickName(validateNickName(newNickName));
    };


    return(
        <LoginPageUI
            login = {login}
            onClickSignUp = {onClickSignUp}
            onClickSign = {onClickSign}
            handleEmailChange ={handleEmailChange}
            handlePasswordChange = {handlePasswordChange}
            handleNickNameChange = {handleNickNameChange}
            setNickName = {setNickName}
            setEmail = {setEmail}
            setPassword = {setPassword}
            onClickLogin = {onClickLogin}
         />
    )
}