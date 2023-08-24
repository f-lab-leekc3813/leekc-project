import { ChangeEvent } from "react";

export interface ILoginPageUIProps {
    login: boolean;
    onClickSignUp: () => void;
    onClickSign : () => Promise<void>;
    handleEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handlePasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleNickNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
    setNickName: (value: string) => void;
    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
    onClickLogin: () => Promise<void>;
}