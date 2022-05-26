import Alert from "../../commons/modal/alert/alert";
import * as S from "./changePassword.styles";

export default function ChangePasswordUI(props: any) {
    return (
        <>
            {props.alertModal && (
                <Alert
                    onClick={props.onClickAlertModal}
                    onClickExit={
                        props.go ? props.onClickExitRouterModal : props.onClickExitAlertModal
                    }
                    contents={props.modalContents}
                />
            )}
            <S.Wrapper>
                <S.Container>
                    <S.ChangePasswordForm
                        onSubmit={props.handleSubmit(props.onClickUpdatePassword)}
                    >
                        <S.Title>비밀번호 변경하기</S.Title>
                        <div>
                            <S.SubTitle>이메일</S.SubTitle>
                            <S.SubInput
                                type="text"
                                placeholder="가입한 이메일을 작성해주세요."
                                {...props.register("email")}
                            ></S.SubInput>
                        </div>
                        <div>
                            <S.SubTitle>휴대폰 번호</S.SubTitle>
                            <S.NumberWrapper>
                                <S.NumberInput
                                    type="tel"
                                    placeholder="01012345678"
                                    {...props.register("phone")}
                                    onChange={props.onChangePhone}
                                ></S.NumberInput>
                                <S.NumberButton type="button" onClick={props.onClickSendTokenPhone}>
                                    인증번호 전송
                                </S.NumberButton>
                            </S.NumberWrapper>

                            <S.NumberWrapper>
                                <S.NumberInput
                                    type="text"
                                    placeholder="인증번호를 입력해주세요."
                                    onChange={props.onChangeToken}
                                ></S.NumberInput>
                                <S.NumberButton onClick={props.onClickTokenCheck} type="button">
                                    인증하기
                                </S.NumberButton>
                            </S.NumberWrapper>

                            <S.Authorization>인증이 완료되었습니다.</S.Authorization>
                        </div>
                        <div>
                            <S.SubTitle>새로운 비밀번호</S.SubTitle>
                            <S.PasswordInput
                                type="password"
                                placeholder="변경할 비밀번호를 입력해주세요."
                                {...props.register("password")}
                            ></S.PasswordInput>
                            <br />
                            <S.SubTitle>비밀번호 확인</S.SubTitle>
                            <S.PasswordInput
                                type="password"
                                placeholder="비밀번호를 다시 입력해주세요."
                                {...props.register("confirmPassword")}
                            ></S.PasswordInput>
                            <S.PasswordAuthorization>
                                비밀번호가 일치하지 않습니다.
                            </S.PasswordAuthorization>
                        </div>
                        <S.Button title="비밀번호 변경" type="submit">
                            비밀번호 변경
                        </S.Button>
                    </S.ChangePasswordForm>
                </S.Container>
            </S.Wrapper>
        </>
    );
}
