import * as S from "./signup.styles";

export default function SignupUI(props: any) {
    return (
        <S.Wrapper>
            <S.SignUpContents>
                <S.SignupForm onSubmit={props.handleSubmit(props.onClickcreateUser)}>
                    <S.SignUpTop>
                        <S.SignUpTitle>회원가입</S.SignUpTitle>
                        <S.SignUpProfileButton>
                            <S.ProfileHuman src="/image/human.png" />
                        </S.SignUpProfileButton>
                    </S.SignUpTop>
                    <S.SignUpInfo>
                        <S.FormLabel>이름</S.FormLabel>
                        <S.NameInput
                            type="text"
                            placeholder="이름을 입력해주세요"
                            {...props.register("name")}
                        ></S.NameInput>
                        <S.FormLabel>이메일</S.FormLabel>
                        <S.SignupInput
                            type="text"
                            placeholder="이메일을 입력해주세요"
                            {...props.register("email")}
                        ></S.SignupInput>
                        {/* <S.ErrorMsg>{props.formState.errors?.email?.message}</S.ErrorMsg> */}
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
                                    {...props.register("phoneNumber")}
                                ></S.SignUpPhoneInput>
                                <S.SignUpPhoneSendButton
                                    type="button"
                                    onClick={props.onClickSendTokenPhone}
                                >
                                    인증번호 전송
                                </S.SignUpPhoneSendButton>
                            </S.SignNumberSend>
                            <S.SignNumberReceive>
                                <S.SignUpPhoneInput placeholder="인증받는 번호를 남겨주세요"></S.SignUpPhoneInput>
                                <S.SignUpPhoneSendButton
                                    type="button"
                                    onClick={props.onClickTokenCheck}
                                >
                                    인증하기
                                </S.SignUpPhoneSendButton>
                            </S.SignNumberReceive>
                            <S.ErrorMsg>{props.formState.errors?.phone?.message}</S.ErrorMsg>
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
    );
}
