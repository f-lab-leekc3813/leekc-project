import {useRouter} from "next/router";
import LayoutHeader from './header';
import LayoutNavigation from './navigation';
import LayoutFooter from './footer';

export default function Layout(props) {
    const router = useRouter();
    
    console.log(router.asPath);

    return(
        <>
            <LayoutHeader />
            <LayoutNavigation />
            <div>{props.children}</div>
            <LayoutFooter />
        </>
    )
}