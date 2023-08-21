import {useRouter} from "next/router";
import LayoutHeader from './header/header.container';
import LayoutNavigation from './navigation/navigation.container';
import LayoutFooter from './footer/footer.container';

export default function Layout(props: any) {
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