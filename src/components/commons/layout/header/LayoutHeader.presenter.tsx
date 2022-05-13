import * as S from "./LayoutHeader.styles";

export default function HeaderUI() {
    return (
        <S.Wrapper>
            <S.HeaderContents>
                <S.HeaderLogoWrapper>
                    <S.HeaderMain src="/image/mainClick.png" />
                    <S.HeaderTitle>SMAF</S.HeaderTitle>
                </S.HeaderLogoWrapper>
                <S.HeaderSearch>
                    <S.SearchFront>
                        <S.SearchEmo src="/image/searchemo.png" />
                        <S.SearchProject>프로젝트 검색</S.SearchProject>
                    </S.SearchFront>
                    <S.SearchRight>
                        <S.SearchLine src="/image/3line.png" />
                    </S.SearchRight>
                </S.HeaderSearch>
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
