import * as S from "./LayutFooterBottom.styles";

export default function FooterBottomUI() {
    return (
        <S.Wrapper>
            <S.FooterCompany>
                <S.CompanyTitle>(주)SMAF</S.CompanyTitle>
                <S.CompanyInfo>
                    <S.InfoCeo>대표이사:코드캠프</S.InfoCeo>
                    <S.InfoAddress>서울특별시 가나구 다라동 마바빌딩 11층 1102호</S.InfoAddress>
                    <S.InfoHosting>호스팅서비스 사업자:SMAF</S.InfoHosting>
                    <S.InfoPronunciation>사업자등록번호:222-11-116548</S.InfoPronunciation>
                </S.CompanyInfo>
                <S.CompanyCommunication>
                    <S.CommunicationReport>통신판매업신고:2016-서울-8745</S.CommunicationReport>
                    <S.CommunicationEmail>E_mail:smaf87@naver.com</S.CommunicationEmail>
                </S.CompanyCommunication>
                <S.CompanyConsumer>
                    <S.ConsumerReward>소비자피해보상</S.ConsumerReward>
                    <S.ConsumerRewardment>
                        고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한 구매 안전
                        서비스로 소비자 피해보상 보험 서비스를 이용하실 수 있습니다.
                    </S.ConsumerRewardment>
                    <S.ConsumerCopyright>
                        COPYRIGHT(C)2022SMAF,LTD ALL RIGHTS RESERVED
                    </S.ConsumerCopyright>
                </S.CompanyConsumer>
            </S.FooterCompany>
            <S.FooterService>
                <S.ServiceCall>고객센터 1555-4444</S.ServiceCall>
                <S.ServiceTime>운영시간 평일 9:00~18:00</S.ServiceTime>
                <S.ServiceButton>1:1문의하기▶</S.ServiceButton>
            </S.FooterService>
        </S.Wrapper>
    );
}
