import * as S from "./LayoutHeader.styles";

export default function HeaderUI() {
    return (
        <S.Wrapper>
            <S.HeaderContents>
                <S.HeaderLogoWrapper>
                    <S.HeaderMain src="/image/mainClick.png" />
                    <S.HeaderTitle>SMAF</S.HeaderTitle>
                </S.HeaderLogoWrapper>
                <S.HeaderSearch placeholder="프로젝트검색"></S.HeaderSearch>
                <S.HeaderOption>
                    <S.OptionAlarm src="/image/changealarm.png" alt="alarm" />
                </S.HeaderOption>
                <S.HeaderQnaWrapper>
                    <S.OptionQna src="/image/qna.png" alt="qna" />
                </S.HeaderQnaWrapper>
                <S.HeaderSignup>회원가입</S.HeaderSignup>
            </S.HeaderContents>
        </S.Wrapper>
    );
}
