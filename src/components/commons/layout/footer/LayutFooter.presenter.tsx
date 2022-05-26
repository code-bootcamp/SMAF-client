import * as S from "./LayutFooter.styles";

export default function FooterBottomUI() {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.Company>회사소개</S.Company>
        <S.Terms>이용약관</S.Terms>
        <S.Info>개인정보처리방침</S.Info>
        <S.Law>고객센터</S.Law>
        <S.App>App 설치</S.App>
      </S.TopWrapper>

      <S.BottomWrapper>
        <S.SnsWrapper>
          <S.FaceBook>
            <span>f</span>
          </S.FaceBook>
          <S.Youtube>
            <span></span>
          </S.Youtube>
          <S.Instagram>
            <span></span>
          </S.Instagram>
        </S.SnsWrapper>
        <S.Copyright>COPYRIGHT(C)2022SMAF,LTD ALL RIGHTS RESERVED</S.Copyright>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
