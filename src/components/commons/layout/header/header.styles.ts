import styled from '@emotion/styled';

export const Wrapper = styled.div`
    position : sticky;
    width: 100%;
    height:80px;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: white;
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    width : 1440px;
    display:flex;
`
export const ImgContainer = styled.div`
    display:flex;
    justify_content: center;
    align-items:center;
`

export const LogoImg = styled.img`
    width: 118px;
    height: 30px;    
`

export const InfoContainer = styled.div`
    width: 1322px;
    display:flex;
    flex-direction : row-reverse;
    justify_content: center;
    align-items:center;
`
export const InfoHref = styled.a`
    font-size: 16px;
    font-weight: bold;
    text-decoration: underline;
    margin-left: 15px;
`