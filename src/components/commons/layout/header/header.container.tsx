import {  useRouter } from "next/router";
import HeaderUI from "./header.presenter";

export default function LayoutHeader(): JSX.Element {
    const router = useRouter();

    const onClickLogin = () => {
        router.push("/login")
    }

    const onClickMain = () => {
        router.push("/")
    }

    return (
        <HeaderUI
            onClickLogin = {onClickLogin}
            onClickMain = {onClickMain}
         />
    )
}