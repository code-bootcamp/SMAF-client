import * as S from "./LayoutFooterTop.styles";

export default function FooterTopUI() {
    return (
        <S.Wrapper>
            <S.FooterWrapper>
                <S.FooterMenu>
                    <S.FooterContents>회사소개</S.FooterContents>
                    <S.FooterContents>이용약관</S.FooterContents>
                    <S.FooterContents>개인정보처리방침</S.FooterContents>
                    <S.FooterContents>청소년보호방침</S.FooterContents>
                    <S.FooterContents>입점/제휴문의</S.FooterContents>
                    <S.FooterContents>대량구매문의</S.FooterContents>
                    <S.FooterStore>매장안내</S.FooterStore>
                </S.FooterMenu>
                <S.FooterPatner>파트너센터</S.FooterPatner>
            </S.FooterWrapper>
        </S.Wrapper>
    );
}
