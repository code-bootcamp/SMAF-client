import * as S from './login.styles'

export default function LoginUI(){

    return(
        <S.Wrapper>
                <S.Title>로그인</S.Title>
            <S.Container>
                <S.InputBox>
                    <S.Input type="text" placeholder="이메일을 입력하세요." />
                    <S.Input type="password" placeholder="비밀번호를 입력하세요." />
                </S.InputBox>
                <S.Check>
                    <div>
                        <S.CheckBox type="checkbox"/> 로그인 상태 유지
                    </div>
                    <S.IdPw>아이디/비밀번호</S.IdPw>
                </S.Check>
                <S.LoginBtn>로그인</S.LoginBtn>
                <S.SubTitle>SNS로 로그인하기</S.SubTitle>
                <S.Sns>
                    <S.GoogleBtn>
                        <S.Logo src="/mainPageImages/google.png" />
                    </S.GoogleBtn>
                    <S.NaverBtn>
                        <S.Logo src="/mainPageImages/naver.png" />
                    </S.NaverBtn>
                    <S.KakaoBtn>
                        <S.Logo src="/mainPageImages/kakao.png" />
                    </S.KakaoBtn>
                </S.Sns>
                <S.Bottom>
                    <S.JoinBtn>회원가입</S.JoinBtn>
                    <S.ToBeforeLogin>비회원 무료체험 이용하기 ></S.ToBeforeLogin>
                </S.Bottom>
            </S.Container>
        </S.Wrapper>
    )
}