import styled from "@emotion/styled";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 56px;
    background-color: #ffffff;
    border-bottom: 1px solid #dbdbdb;
`;

const FooterMenu = styled.div`
    width: 65%;
    display: flex;
`;

const FooterContents = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.05em;
    color: #000000;
    border-right: 1px solid #dbdbdb;
    padding: 0 3% 0 3%;
`;

const FooterStore = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.05em;
    color: #000000;
    padding-left: 4%;
`;

const FooterPatner = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.05em;

    color: #000000;
`;

export default function LayoutFooterTop() {
    return (
        <Wrapper>
            <FooterMenu>
                <FooterContents>회사소개</FooterContents>
                <FooterContents>이용약관</FooterContents>
                <FooterContents>개인정보처리방침</FooterContents>
                <FooterContents>청소년보호방침</FooterContents>
                <FooterContents>입점/제휴문의</FooterContents>
                <FooterContents>대량구매문의</FooterContents>
                <FooterStore>매장안내</FooterStore>
            </FooterMenu>
            <FooterPatner>파트너센터</FooterPatner>
        </Wrapper>
    );
}
