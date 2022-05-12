import styled from "@emotion/styled";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 1980px; // 내가 줌 
    height: 90px;
    background-color: #333333;
`;

const HeaderContents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
`;

const HeaderMain = styled.img`
    width: 36px;
    height: 36px;
`;

const HeaderTitle = styled.div`
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.1em;
    color: #ffffff;
    padding-left: 2%;
    padding-right: 4%;

    /* border: 1px solid yellow; */
`;

const HeaderSearch = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 44px;
    background: #d9d9d9;
    border-radius: 16px;
`;

const SearchFront = styled.div`
    display: flex;
    align-items: center;
    padding-left: 35%;
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

const SearchRight = styled.div`
    padding-right: 4%;
`;

const SearchLine = styled.img`
    width: 16px;
    height: 16px;
`;

const HeaderOption = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    padding-left: 4%;
    justify-content: space-evenly;
`;

const HeaderSignup = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #ffffff;
    padding-left: 20%;
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
                <HeaderMain src="/image/mainClick.png" />
                <HeaderTitle>SMAF</HeaderTitle>
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
                    <OptionQna src="/image/qna.png" alt="qna" />
                    <HeaderSignup>회원가입</HeaderSignup>
                </HeaderOption>
            </HeaderContents>
        </Wrapper>
    );
}
