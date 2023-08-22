import styled from "@emotion/styled";


export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Container = styled.div`
    width: 1440px;
`
export const SearchWrapper = styled.div`
    height: 543px;
    position: relative;
    border-radius: 8px;
`

export const SearchContainer = styled.div`
    width: 1440px;
    height:495px;
    position: absolute;
    bottom: 0;
    border-radius: 8px;
    background-image: url('https://a0.muscache.com/im/pictures/c8ba7316-48cc-407c-bbad-04116ff2c555.jpg?im_w=960');
    background-repeat: no-repeat;
    background-position: right;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const SearchContentWrapper = styled.div`
    width:1440px;
    height: 412px;
`
export const SearchContents = styled.div`
    width: 500px;
    height: 430px;
    background-color: white;
    border-radius: 8px;
    padding: 35px;
    display:flex;
    flex-direction: column;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
`
export const SearchTitle = styled.h1`
    font-size:32px;
`

export const SearchSubTitle = styled.div`
    color: #717171;
    fontsize:16px;
    margin-top: 10px;
    margin-bottom : 10px;
`

export const LocationWrapper = styled.div`
    border-radius: 8px;
    box-shadow: #DDDDDD 0 0 0 1px inset;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
`

export const LocationInfo = styled.span`
    font-size: 10px;
`
export const LocationInput = styled.input`
    margin-top: 10px;
    border: none;
    font-size: 20px;
    color: #717171;
`

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`
export const SubmitButton = styled.button`
    width: 380px;
    height : 55px;
    margin-top:15px;
    border-radius: 8px;
    font-size: 20px;
    color: white;
    background-color : #FF385C;
    font-weight: 800;
    cursor: pointer;
`
export const InfoWrapper = styled.div`
    width: 1440px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 3rem;
`

export const InfoContainer = styled.div`
    width: 350px;
    height: 200px;
    display: flex;
    flex-direction: column;
`
export const ImageContainer = styled.div`
    display: flex;
    align-items :center;
    justify-content : flex-start;
    height: 5vh;
`
export const InfoImage = styled.img`
    width: 32px;
    height: 31px;
`

export const InfoTitle = styled.h2`
    font-size: 22px;
`
export const InfoContent = styled.div`
    font-weight : 400;
    font-size : 18px;
`

export const LikeWrapper = styled.div`
    display: flex;
    flex-direction : column;
    margin-top: 120px;
    margin-bottom: 50px;
`
export const LikeTitle = styled.div`
    font-weight: bold;
    font-size: 35px;
`
export const LikeSubTitle = styled.div`
    margin-top: 10px;
    font-size: 18px;
`

export const LikeContainers = styled.div`
    margin-top: 10px;
    display:flex;
    flex-wrap: wrap;
    width: 1440px;
    backgrond-color: red;
`
export const LikeContainer = styled.div`
    width: 345px;
    height: 400px;
    margin-right: 10px;
    margin-bottom: 10px;
`
export const LikeImage = styled.img`
    width: 338px;
    height: 250px;
    border-radius: 8px;
`
export const LikeTitleWrapper = styled.div`
    display: flex;
    flex-direction: row
`
export const LikeName = styled.div`
    font-weight: bold;
    font-size: 18px;
`
export const LikeContent = styled.div`
    font-size: 15px;
    color: gray
`
export const DayMoney = styled.div`
    font-weight: bold;
    font-size: 18px;
`
export const TotalMoney = styled.div`
    color: gray;
    font-size: 15px;
`

export const LikeButton = styled.button`
    width: 130px;
    height: 48px;
    border-radius: 8px;
    background-color: white;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
`
export const QueWrapper = styled.div`
    width: 1440px;
    display: flex;
    flex-direction: row;
`
export const QueLeft = styled.div`
    width: 770px;
    font-size: 45px;
    font-weight: bold;
`
export const QueRight = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 22px;
`
export const QueTitle = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
`

export const FooterWrapper = styled.div`
    width: 100%;
    height: 130px;
    background-color: #F7F7F7ff;
    display: flex;
    justify-content: center;
`

export const FooterContainer = styled.div`
    width:1440px;
    height: 130px;
    display: flex;
    flex-direction: column;
`

export const FooterTop = styled.div`
    padding-top: 15px;
    height: 60px;
`

export const FooterBottom = styled.div`
    font-size: 10px;
    color : gray;
`