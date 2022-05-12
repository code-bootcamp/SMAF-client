import styled from "@emotion/styled";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90px;
    background-color: #333333;
`;

const HeaderContents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`;

const HeaderLogoWrapper = styled.div`
    display: flex;
    padding-right: 3%;
`;

const HeaderMain = styled.img`
    width: 36px;
    height: 36px;
`;

const HeaderTitle = styled.div`
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: #ffffff;
    padding-left: 10%;

    /* border: 1px solid yellow; */
`;

const HeaderSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    width: 45%;
    background: #d9d9d9;
    border-radius: 16px;
    padding: 0 10px;
`;

const SearchFront = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const SearchProject = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: -0.03em;
    color: #888888;
`;

const SearchEmo = styled.img`
    width: 19px;
    height: 19px;
`;

const SearchRight = styled.div``;

const SearchLine = styled.img`
    width: 16px;
    height: 16px;
`;

const HeaderOption = styled.div`
    padding-left: 4%;
    display: flex;
    align-items: center;
    padding-right: 4%;
`;

const HeaderQnaWrapper = styled.div`
    padding-right: 5%;
`;

const HeaderSignup = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #ffffff;
`;

const OptionAlarm = styled.img`
    width: 30px;
    height: 30px;
`;
const OptionQna = styled.img`
    width: 33.25px;
    height: 33.25px;
`;

export default function Layoutheader() {
    return (
        <Wrapper>
            <HeaderContents>
                <HeaderLogoWrapper>
                    <HeaderMain src="/image/mainClick.png" />
                    <HeaderTitle>SMAF</HeaderTitle>
                </HeaderLogoWrapper>
                <HeaderSearch>
                    <SearchFront>
                        <SearchEmo src="/image/searchemo.png" />
                        <SearchProject>프로젝트 검색</SearchProject>
                    </SearchFront>
                    <SearchRight>
                        <SearchLine src="/image/3line.png" />
                    </SearchRight>
                </HeaderSearch>
                <HeaderOption>
                    <OptionAlarm src="/image/alarm.png" alt="alarm" />
                </HeaderOption>
                <HeaderQnaWrapper>
                    <OptionQna src="/image/qna.png" alt="qna" />
                </HeaderQnaWrapper>
                <HeaderSignup>회원가입</HeaderSignup>
            </HeaderContents>
        </Wrapper>
    );
}
