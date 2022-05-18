import * as S from "./changePassword.styles";

export default function ChangePasswordUI() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>비밀번호 변경하기</S.Title>
        <div>
          <S.SubTitle>이메일</S.SubTitle>
          <S.SubInput
            type="text"
            placeholder="가입한 이메일을 작성해주세요."
          ></S.SubInput>
        </div>
        <div>
          <S.SubTitle>휴대폰 번호</S.SubTitle>
          <S.NumberWrapper>
            <S.NumberInput
              type="text"
              placeholder="01012345678"
            ></S.NumberInput>
            <S.NumberButton>인증번호 전송</S.NumberButton>
          </S.NumberWrapper>

          <S.NumberWrapper>
            <S.NumberInput
              type="text"
              placeholder="인증번호를 입력해주세요."
            ></S.NumberInput>
            <S.NumberButton>인증하기</S.NumberButton>
          </S.NumberWrapper>

          <S.Authorization>인증이 완료되었습니다.</S.Authorization>
        </div>
        <div>
          <S.SubTitle>새로운 비밀번호</S.SubTitle>
          <S.PasswordInput
            type="password"
            placeholder="변경할 비밀번호를 입력해주세요."
          ></S.PasswordInput>
          <br />
          <S.SubTitle>비밀번호 확인</S.SubTitle>
          <S.PasswordInput
            type="password"
            placeholder="비밀번호를 다시 이력해주세요."
          ></S.PasswordInput>
          <S.PasswordAuthorization>
            비밀번호가 일치하지 않습니다.
          </S.PasswordAuthorization>
        </div>
        <S.Button>비밀번호 변경</S.Button>
      </S.Container>
    </S.Wrapper>
  );
}
