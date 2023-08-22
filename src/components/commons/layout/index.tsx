import {useRouter} from "next/router";
import LayoutHeader from './header/header.container';
import LayoutNavigation from './navigation/navigation.container';
import LayoutFooter from './footer/footer.container';

const HIDDEN_NAVIGATION = [
    "/",
    "/login"
]

const HIDDEN_FOOTER = [
    "/",
    "/login"
]

export default function Layout(props: any) {
    const router = useRouter();
    
    const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
    const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);
    
    return(
        <>
            <LayoutHeader />
            {!isHiddenNavigation && <LayoutNavigation />}
            <div>{props.children}</div>
            {!isHiddenFooter && <LayoutFooter />}
        </>
    )
}