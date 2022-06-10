import Alert from "../../../../commons/modal/alert/alert";
import ErrorAlert from "../../../../commons/modal/errorModal/alert";
import * as S from "./login.styles";
import { ILoginUIProps } from "./login.types";

export default function LoginUI(props: ILoginUIProps) {
    return (
        <>
            {props.alertModal && (
                <Alert onClickExit={props.onClickExitAlertModal} contents={props.modalContents} />
            )}

            {props.errorAlertModal && (
                <ErrorAlert
                    onClickExit={props.onClickExitErrorModal}
                    contents={props.modalContents}
                />
            )}
            <S.Wrapper>
                <S.Title>로그인</S.Title>
                <S.Container>
                    <S.LoginForm
                        onSubmit={props.handleSubmit(props.onClickLogin as unknown as () => void)}
                    >
                        <S.InputBox>
                            <S.Input
                                type="text"
                                placeholder="이메일을 입력하세요."
                                {...props.register("email")}
                            />
                            <S.Input
                                type="password"
                                placeholder="비밀번호를 입력하세요."
                                {...props.register("password")}
                            />
                        </S.InputBox>
                        <S.Check>
                            <div>
                                <S.CheckBox type="checkbox" /> 로그인 상태 유지
                            </div>
                            <S.IdPw>아이디/비밀번호</S.IdPw>
                        </S.Check>
                        <S.LoginBtn type="submit">로그인</S.LoginBtn>
                    </S.LoginForm>
                    <S.SubTitle>SNS로 로그인하기</S.SubTitle>
                    <S.Sns>
                        <S.GoogleBtn className="google" type="button" onClick={props.clickMeGoogle}>
                            <S.Logo src="/mainPageImages/google.png" />
                        </S.GoogleBtn>
                        <S.NaverBtn className="naver" type="button" onClick={props.clickMeNaver}>
                            <S.Logo src="/mainPageImages/naver.png" />
                        </S.NaverBtn>
                        <S.KakaoBtn className="kakao" type="button" onClick={props.clickMeKakao}>
                            <S.Logo src="/mainPageImages/kakao.png" />
                        </S.KakaoBtn>
                    </S.Sns>
                    <S.Bottom>
                        <S.JoinBtn type="button" onClick={props.MoveToPage("/signup")}>
                            회원가입
                        </S.JoinBtn>
                        <S.ToBeforeLogin type="button" onClick={props.MoveToPage("/")}>
                            비회원 무료체험 이용하기{" "}
                        </S.ToBeforeLogin>
                    </S.Bottom>
                </S.Container>
            </S.Wrapper>
        </>
    );
}
