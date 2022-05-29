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
        <S.Logo>(주)SMAF</S.Logo>
        <S.SnsWrapper>
          <S.FaceBook src="/images/facebook.png"></S.FaceBook>
          <S.Youtube src="/images/youtube.png"></S.Youtube>
          <S.Instagram src="/images/instagram.png"></S.Instagram>
        </S.SnsWrapper>

        <S.Copyright>COPYRIGHT(C)2022SMAF,LTD ALL RIGHTS RESERVED</S.Copyright>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
