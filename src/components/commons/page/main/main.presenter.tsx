import React from 'react';
import { DatePicker, Space } from 'antd';


import * as S from './main.styles';
import DUMMY_DATA from '../../../../data/mainData.json';
import Question from '../../ui/question';

const { RangePicker } = DatePicker;

export default function MainPageUI(props:any) {

    return(
        <S.Wrapper>
            <S.Container>
                <S.SearchWrapper>
                    <S.SearchContainer>
                        <S.SearchContentWrapper>
                            <S.SearchContents>
                                <S.SearchTitle>
                                    한국 숙소 찾기
                                </S.SearchTitle>
                                <S.SearchSubTitle>
                                    통나무집이나 콘도, 캐슬을 찾고 계신가요? 에어비엔비에서 원하는 숙소를 검색해 보세요.
                                </S.SearchSubTitle>
                                <S.LocationWrapper>
                                    <S.LocationInfo>위치</S.LocationInfo>
                                    <S.LocationInput placeholder='어디든지' />
                                </S.LocationWrapper>
                                <Space direction="vertical" size={12} style={{marginTop : "10px",marginBottom: "10px"}}>
                                    <RangePicker presets={props.rangePresets} onChange={props.onRangeChange} style={{width: "380px"}}/>
                                </Space>
                                <S.RowContainer>
                                    <S.LocationWrapper style={{width: "189px"}}>
                                        <S.LocationInfo>성인</S.LocationInfo>
                                        <S.LocationInput placeholder='인원을 입력해주세요' style={{fontSize : "14px"}} />
                                    </S.LocationWrapper>
                                    <S.LocationWrapper style={{width: "190px"}}>
                                        <S.LocationInfo>어린이</S.LocationInfo>
                                        <S.LocationInput placeholder='인원을 입력해주세요' style={{fontSize : "14px"}} />
                                    </S.LocationWrapper>
                                </S.RowContainer>
                                <S.SubmitButton >검색하기</S.SubmitButton>          
                            </S.SearchContents>
                        </S.SearchContentWrapper>
                    </S.SearchContainer>
                </S.SearchWrapper>
                <S.InfoWrapper>
                    {DUMMY_DATA.info.map((data) => {
                        return (
                        <S.InfoContainer key={data.index}>
                            <S.ImageContainer>
                                <S.InfoImage src={data.image} />
                            </S.ImageContainer>
                            <S.InfoTitle>{data.title}</S.InfoTitle>
                            <S.InfoContent>{data.content}</S.InfoContent>
                        </S.InfoContainer>
                        )
                    })}  
                </S.InfoWrapper>
                <S.LikeWrapper>
                    <S.LikeTitle>한국의 인기 급상승 숙소</S.LikeTitle>
                    <S.LikeSubTitle>에어비앤비에서 많은 관심을 받고 있으며 평점이 높은 숙소입니다.</S.LikeSubTitle>
                    <S.LikeContainers>
                            {DUMMY_DATA.like.map((data) => {
                                return(
                                    <S.LikeContainer key={data.index}>
                                        <S.LikeImage src={data.image} />
                                            <S.LikeName>{data.title}</S.LikeName>
                                            <S.LikeContent>{data.summary}</S.LikeContent>
                                            <S.LikeContent>{data.count}</S.LikeContent>
                                            <S.LikeContent>{data.date}</S.LikeContent>
                                            <S.LikeTitleWrapper>
                                                <S.DayMoney>{data.dayMoney}</S.DayMoney>
                                                <S.TotalMoney> / 박, 총액: {data.totalMoney}</S.TotalMoney>
                                            </S.LikeTitleWrapper>
                                    </S.LikeContainer>
                                )
                            })}
                    </S.LikeContainers>
                    <S.LikeButton>더 찾아보기</S.LikeButton>
                </S.LikeWrapper>
                <S.QueWrapper>
                    <S.QueLeft>
                        자주 묻는 질문과 답변
                    </S.QueLeft>
                    <S.QueRight>
                        {DUMMY_DATA.qeustion.map((data) => {
                            return(
                                <Question 
                                    key={data.index}
                                    data = {data} 
                                />
                            )
                        })}
                    </S.QueRight>
                </S.QueWrapper>
            </S.Container>
            <S.FooterWrapper>
                <S.FooterContainer>
                    <S.FooterTop>
                        © 2023 Airbnb, Inc.·개인정보 처리방침이용약관사이트맵한국의 변경된 환불 정책회사 세부정보
                        <hr style={{marginTop : "20px", backgroundColor : "lightgray"}} />
                    </S.FooterTop>
                    <S.FooterBottom>
                         웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
                    </S.FooterBottom>
                </S.FooterContainer>
            </S.FooterWrapper>
        </S.Wrapper>
    )
}