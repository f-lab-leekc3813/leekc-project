import * as S from './footer.styles';

export default function FooterUI() {
    return (
        <S.Wrapper>
            <S.Container>
                <S.FooterTop >
                    <S.FooterInfo>
                    @ 2023 Airbnb,lnc · 개인정보 처리방침 · 이용약관 · 사이트맵 · 변경된 환불 정책 · 회사 세부정보
                    </S.FooterInfo>
                </S.FooterTop>
                <S.FooterBottom>
                웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
                </S.FooterBottom>
            </S.Container>
        </S.Wrapper>
    )
}