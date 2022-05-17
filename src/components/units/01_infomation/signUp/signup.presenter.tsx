import * as S from "./signUp.styles";

export default function SignupUI() {
    return (
        <S.Wrapper>
            <S.SignUpContents>
                <S.SignupForm>
                    <S.SignUpTop>
                        <S.SignUpTitle>회원가입</S.SignUpTitle>
                        <S.SignUpProfileButton>
                            <S.ProfileHuman src="/image/human.png" />
                        </S.SignUpProfileButton>
                    </S.SignUpTop>
                    <S.SignUpInfo>
                        <S.FormLabel>이름</S.FormLabel>
                        <S.NameInput type="text" placeholder="이름을 입력해주세요"></S.NameInput>
                        <S.FormLabel>이메일</S.FormLabel>
                        <S.SignupInput
                            type="text"
                            placeholder="이메일을 입력해주세요"
                        ></S.SignupInput>
                        <S.ErrorMsg>사용가능한 이메일입니다.</S.ErrorMsg>
                        <S.FormLabel>비밀번호</S.FormLabel>
                        <S.PasswordInput1
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                        ></S.PasswordInput1>
                        <S.ErrorMsg></S.ErrorMsg>
                        <S.PasswordInput2
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                        ></S.PasswordInput2>
                        <S.ErrorMsg>비밀번호가 일치하지 않습니다.</S.ErrorMsg>
                    </S.SignUpInfo>
                    <S.SignupPhone>
                        <S.FormLabel>휴대폰 번호</S.FormLabel>
                        <S.SignUpcertification>
                            <S.SignNumberSend>
                                <S.SignUpPhoneInput
                                    type="number"
                                    placeholder="010123456678"
                                ></S.SignUpPhoneInput>
                                <S.SignUpPhoneSendButton>인증번호 전송</S.SignUpPhoneSendButton>
                            </S.SignNumberSend>
                            <S.SignNumberReceive>
                                <S.SignUpPhoneInput placeholder="인증받는 번호를 남겨주세요"></S.SignUpPhoneInput>
                                <S.SignUpPhoneSendButton>인증하기</S.SignUpPhoneSendButton>
                            </S.SignNumberReceive>
                        </S.SignUpcertification>
                    </S.SignupPhone>
                    <S.SignAboutMe>
                        <S.FormLabel>자기소개</S.FormLabel>
                        <S.SignAboutInput placeholder="자기소개를 입력해주세요"></S.SignAboutInput>
                    </S.SignAboutMe>
                    <S.SignButtonWrapper>
                        <S.SignSubmitButton>회원가입완료</S.SignSubmitButton>
                    </S.SignButtonWrapper>
                </S.SignupForm>
            </S.SignUpContents>
        </S.Wrapper>
    );
}
