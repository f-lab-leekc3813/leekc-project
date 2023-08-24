import styled from '@emotion/styled';

export const Wrapper = styled.div`
    position : sticky;
    width: 100%;
    height:80px;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: white;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid lightgray;
`

export const Container = styled.div`
    width : 1440px;
    display:flex;
    @media (max-width: 1440px) {
        width: 100%;
        max-width: 1440px;
      }
    
    @media (max-width: 768px) {
      max-width: 768px;
    }
`
export const ImgContainer = styled.div`
    display:flex;
    justify_content: center;
    align-items:center;
    cursor: pointer;
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
    cursor: pointer;
`