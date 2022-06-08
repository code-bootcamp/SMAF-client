import Uploads01 from "../../../commons/uploads/upload1/Upload01.container";
import * as S from "./signup.styles";
import Alert from "../../../commons/modal/alert/alert";
import ErrorAlert from "../../../commons/modal/errorModal/alert";
import { ISignupUIProps } from "./signup.types";

export default function SignupUI(props: ISignupUIProps) {
    return (
        <>
            {props.alertModal && (
                <Alert
                    onClickExit={props.go ? props.onClickRoutingModal : props.onClickconfirmModal}
                    contents={props.modalContents}
                />
            )}
            {props.errorAlertModal && (
                <ErrorAlert onClickExit={props.onClickErrorModal} contents={props.modalContents} />
            )}
            <S.Wrapper>
                <S.SignUpContents>
                    <S.SignupForm
                        onSubmit={props.handleSubmit(
                            props.onClickcreateUser as unknown as () => void
                        )}
                    >
                        <S.SignUpTop>
                            <S.SignUpTitle>회원가입</S.SignUpTitle>
                            <S.SignUpProfileWrapper>
                                <Uploads01
                                    type="upload"
                                    fileUrl={props.urls}
                                    setUrls={props.setUrls}
                                    index={0}
                                />
                            </S.SignUpProfileWrapper>
                        </S.SignUpTop>
                        <S.SignUpInfo>
                            <S.FormLabel>이름</S.FormLabel>
                            <S.NameInput
                                type="text"
                                placeholder="이름을 입력해주세요"
                                {...props.register("userName")}
                            ></S.NameInput>
                            <S.FormLabel>이메일</S.FormLabel>
                            <S.SignupInput
                                type="text"
                                placeholder="이메일을 입력해주세요"
                                {...props.register("email")}
                            ></S.SignupInput>
                            <S.ErrorMsg>{props.formState.errors?.email?.message}</S.ErrorMsg>
                            <S.FormLabel>비밀번호</S.FormLabel>
                            <S.PasswordInput1
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                {...props.register("password")}
                            ></S.PasswordInput1>
                            <S.PasswordInput2
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                {...props.register("confirmPassword")}
                            ></S.PasswordInput2>
                            <S.ErrorMsg>{props.formState.errors?.password?.message}</S.ErrorMsg>
                        </S.SignUpInfo>
                        <S.SignupPhone>
                            <S.FormLabel>휴대폰 번호</S.FormLabel>
                            <S.SignUpcertification>
                                <S.SignNumberSend>
                                    <S.SignUpPhoneInput
                                        type="tel"
                                        placeholder="010123456678"
                                        {...props.register("phone")}
                                        onChange={props.onChangePhone}
                                    ></S.SignUpPhoneInput>
                                    <S.SignUpPhoneSendButton
                                        type="button"
                                        onClick={props.onClickSendTokenPhone}
                                    >
                                        인증번호 전송
                                    </S.SignUpPhoneSendButton>
                                </S.SignNumberSend>
                                <S.ErrorphoneMsg>
                                    {props.formState.errors?.phone?.message}
                                </S.ErrorphoneMsg>
                                <S.SignNumberReceive>
                                    <S.SignUpPhoneInput
                                        type="text"
                                        placeholder="인증받을 번호를 남겨주세요"
                                        onChange={props.onChangeToken}
                                    ></S.SignUpPhoneInput>
                                    <S.SignUpPhoneSendButton
                                        // type="button"
                                        onClick={props.onClickTokenCheck}
                                        type="button"
                                    >
                                        인증하기
                                    </S.SignUpPhoneSendButton>
                                </S.SignNumberReceive>
                            </S.SignUpcertification>
                        </S.SignupPhone>
                        <S.SignAboutMe>
                            <S.FormLabel>자기소개</S.FormLabel>
                            <S.SignAboutInput placeholder="자기소개를 입력해주세요"></S.SignAboutInput>
                        </S.SignAboutMe>
                        <S.SignButtonWrapper>
                            <S.SignSubmitButton title="회원가입하기" type="submit">
                                회원가입완료
                            </S.SignSubmitButton>
                        </S.SignButtonWrapper>
                    </S.SignupForm>
                </S.SignUpContents>
            </S.Wrapper>
        </>
    );
}
