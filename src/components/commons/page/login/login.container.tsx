import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

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

    const onClickSign = async ()=> {
        if (isValidPassword && isValidEmail && isValidNickName) {
            try{
              const response = await axios.post('/api/signup', {
                nickName,
                email,
                password,
              });
              console.log(response);
              if (response.status === 200) {
                setLogin((prev) => !prev);
                setNickName('');
                setEmail('');
                setPassword('');
                alert('축하합니다!! 회원가입이 완료되었습니다!');
                router.push('/')
              } else {
                alert('서버에러')
              }
            }catch(error){
              console.log('Error', error);
              alert('에러가 발생하였습니다.')
            } 
          } else {
            alert('정확한 양식을 입력하세요');
          }
    }

    const onClickLogin = async ()=> {
        try{
          const response = await axios.post('/api/login', {
            email,
            password,
          });
          const token = response.data.token;
          localStorage.setItem('token', token);
          
          console.log('Login success:', response);
          router.push('/')
        }catch(error) {
          console.error('Login error:', error);
        }
    }

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      };
    
    const validatePassword = (password) => {
      return password.length >= 8;
    };

    const validateNickName = (nickName) => {
        return nickName.length >= 3; 
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