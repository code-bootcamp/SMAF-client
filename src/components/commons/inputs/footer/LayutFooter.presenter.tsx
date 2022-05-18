import * as S from "./LayutFooter.styles";

export default function FooterBottomUI() {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.Company>회사소개</S.Company>
        <S.Terms>이용약관</S.Terms>
        <S.Info>개인정보처리방침</S.Info>
        <S.Law>청소년보호방침</S.Law>
        <S.Partnership>입점/제휴문의</S.Partnership>
        <S.BulkPurchaese>대량구매문의</S.BulkPurchaese>
        <S.Store>매장안내</S.Store>
        <S.Patner>파트너센터</S.Patner>
      </S.TopWrapper>

      <S.BottomWrapper>
        <S.InnerWrapper>
          <S.CompanyWrapper>
            <S.Title>(주)SMAF</S.Title>
            <S.CompanyInfo>
              <S.Ceo>대표이사:코드캠프</S.Ceo>
              <S.Address>
                서울특별시 가나구 다라동 마바빌딩 11층 1102호
              </S.Address>
              <S.Hosting>호스팅서비스 사업자:SMAF</S.Hosting>
              <S.Pronunciation>사업자등록번호:222-11-116548</S.Pronunciation>
            </S.CompanyInfo>

            <S.Communication>
              <S.Report>통신판매업신고:2016-서울-8745</S.Report>
              <S.Email>E_mail:smaf87@naver.com</S.Email>
            </S.Communication>

            <S.Consumer>
              <S.Reward>소비자피해보상</S.Reward>
              <S.Rewardment>
                고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서
                가입한 구매 안전 서비스로 소비자 피해보상 보험 서비스를 이용하실
                수 있습니다.
              </S.Rewardment>
              <S.Copyright>
                COPYRIGHT(C)2022SMAF,LTD ALL RIGHTS RESERVED
              </S.Copyright>
            </S.Consumer>
          </S.CompanyWrapper>

          <S.ServiceWrapper>
            <S.Call>고객센터 1555-4444</S.Call>
            <S.Time>운영시간 평일 9:00~18:00</S.Time>
            <S.ServiceButton>1:1문의하기▶</S.ServiceButton>
          </S.ServiceWrapper>
        </S.InnerWrapper>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
