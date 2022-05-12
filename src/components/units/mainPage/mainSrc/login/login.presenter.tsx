import * as S from './login.styles'

export default function LoginUI(){

    return(
        <S.Wrapper>
            <S.Container>
                <S.Title>로그인</S.Title>
                <S.InputBox>
                    <S.Input type="text" placeholder="이메일을 입력해주세요." />
                    <S.Input type="text" placeholder="비밀번호를 입력해주세요." />
                </S.InputBox>
                <S.LoginBtn>로그인</S.LoginBtn>
            </S.Container>
                <S.SubTitle>SNS로 로그인하기</S.SubTitle>
                <S.GoogleBtn>
                    <S.Logo src="/mainPageImages/google.png" />
                    <S.Sns>Google 로그인</S.Sns>
                </S.GoogleBtn>
                <S.NaverBtn>
                    <S.Logo src="/mainPageImages/naver.png" />
                    <S.Sns>네이버 로그인</S.Sns>
                </S.NaverBtn>
                <S.KakaoBtn>
                    <S.Logo src="/mainPageImages/kakao.png" />
                    <S.Sns>카카오톡 로그인</S.Sns>
                </S.KakaoBtn>
                <S.Bottom>
                    <S.BottomBtn>회원정보찾기</S.BottomBtn>
                    <S.BottomBtn>|</S.BottomBtn>
                    <S.BottomBtn>로그인</S.BottomBtn>
                </S.Bottom>
            <S.Container>

            </S.Container>
        </S.Wrapper>
    )
}