import {  useRouter } from "next/router";
import {useRecoilState} from 'recoil';

import { loginState } from "../../../../store/recoilAtoms";
import HeaderUI from "./header.presenter";



export default function LayoutHeader(): JSX.Element {
    const [isLogged, setIsLogged] = useRecoilState(loginState);

    const router = useRouter();

    const onClickLogin = () : void => {
        router.push("/login")
    }

    const onClickMain = () : void => {
        router.push("/")
    }

    const handleLogout = () : void  => {
        setIsLogged(false)
        console.log('클릭')
    }

    const moveCategories = () : void => {
        router.push("/categories")
    }

    return (
        <HeaderUI
            onClickLogin = {onClickLogin}
            onClickMain = {onClickMain}
            handleLogout = {handleLogout}
            isLogged = {isLogged}
            moveCategories = {moveCategories}
         />
    )
}