import styled from "@emotion/styled";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 290px;
    background-color: white;
`;

const FooterCompany = styled.div``;

const CompanyTitle = styled.div`
    font-size: 24px;
    line-height: 100%;
    padding-left: 1%;
`;

const CompanyInfo = styled.div`
    display: flex;
    padding-top: 2%;
`;

const InfoCeo = styled.div`
    font-size: 13px;
    line-height: 100%;
    border-right: 1px solid #dbdbdb;
    padding: 0 1.5% 0 1.5%;
`;

const InfoAddress = styled.div`
    font-size: 13px;
    line-height: 100%;
    border-right: 1px solid #dbdbdb;
    padding: 0 1.5% 0 1.5%;
`;

const InfoHosting = styled.div`
    font-size: 13px;
    line-height: 100%;
    border-right: 1px solid #dbdbdb;
    padding: 0 1.5% 0 1.5%;
`;

const InfoPronunciation = styled.div`
    font-size: 13px;
    line-height: 100%;
    padding: 0 1.5% 0 1.5%;
`;

const CompanyCommunication = styled.div`
    display: flex;
    padding-top: 2%;
`;

const CommunicationReport = styled.div`
    font-size: 13px;
    line-height: 100%;
    border-right: 1px solid #dbdbdb;
    padding: 0 1.5% 0 1.5%;
`;

const CommunicationEmail = styled.div`
    font-size: 13px;
    line-height: 100%;
    padding-left: 2%;
`;

const CompanyConsumer = styled.div`
    padding-top: 4%;
    padding-left: 1%;
`;

const ConsumerReward = styled.div`
    font-size: 13px;
    line-height: 100%;
    color: #111111;
`;

const ConsumerRewardment = styled.div`
    font-size: 13px;
    line-height: 100%;
    padding-top: 2%;
    letter-spacing: -5%;
`;

const ConsumerCopyright = styled.div`
    font-size: 13px;
    line-height: 100%;
    padding-top: 1%;
`;

const FooterService = styled.div`
    flex-direction: column;
`;

const ServiceCall = styled.div`
    font-size: 24px;
    line-height: 100%;
`;

const ServiceTime = styled.div`
    font-size: 12px;
    line-height: 100%;
    padding-top: 7%;
    padding-bottom: 4%;
`;

const ServiceButton = styled.button`
    font-size: 12px;
    line-height: 100%;
`;

export default function LayoutFooterBottom() {
    return (
        <Wrapper>
            <FooterCompany>
                <CompanyTitle>(주)SMAF</CompanyTitle>
                <CompanyInfo>
                    <InfoCeo>대표이사:코드캠프</InfoCeo>
                    <InfoAddress>서울특별시 가나구 다라동 마바빌딩 11층 1102호</InfoAddress>
                    <InfoHosting>호스팅서비스 사업자:SMAF</InfoHosting>
                    <InfoPronunciation>사업자등록번호:222-11-116548</InfoPronunciation>
                </CompanyInfo>
                <CompanyCommunication>
                    <CommunicationReport>통신판매업신고:2016-서울-8745</CommunicationReport>
                    <CommunicationEmail>E_mail:smaf87@naver.com</CommunicationEmail>
                </CompanyCommunication>
                <CompanyConsumer>
                    <ConsumerReward>소비자피해보상</ConsumerReward>
                    <ConsumerRewardment>
                        고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한 구매 안전
                        서비스로 소비자 피해보상 보험 서비스를 이용하실 수 있습니다.
                    </ConsumerRewardment>
                    <ConsumerCopyright>
                        COPYRIGHT(C)2022SMAF,LTD ALL RIGHTS RESERVED
                    </ConsumerCopyright>
                </CompanyConsumer>
            </FooterCompany>
            <FooterService>
                <ServiceCall>고객센터 1555-4444</ServiceCall>
                <ServiceTime>운영시간 평일 9:00~18:00</ServiceTime>
                <ServiceButton>1:1문의하기</ServiceButton>
            </FooterService>
        </Wrapper>
    );
}
