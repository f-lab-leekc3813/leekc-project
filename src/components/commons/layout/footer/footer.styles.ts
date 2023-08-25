import styled from '@emotion/styled';

export const Wrapper = styled.div`
    position : fixed;
    width: 100%;
    height: 120px;
    bottom: 0;
    z-index: 1;
    background-color: #DDDDDD;
    transition: bottom 0.3s ease-in-out;
    display:flex;
    justify-content: center;
`

export const Container = styled.div`
    width: 2000px;

    display:flex;
    flex-direction: column;
`

export const FooterTop = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
`

export const FooterInfo = styled.span`
    font-size: 15px;
    color: #222222
`

export const FooterBottom = styled.div`
    height: 70px;
    font-size: 10px;
    color: #717171;
`