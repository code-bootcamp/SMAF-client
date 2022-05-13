import styled from "@emotion/styled";

export const Wrapper = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90px;
    background-color: #333333;
`;

export const HeaderContents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`;

export const HeaderLogoWrapper = styled.div`
    display: flex;
    padding-right: 3%;
`;

export const HeaderMain = styled.img`
    width: 36px;
    height: 36px;
`;

export const HeaderTitle = styled.div`
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: #ffffff;
    padding-left: 10%;

    /* border: 1px solid yellow; */
`;

export const HeaderSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    width: 45%;
    background: #d9d9d9;
    border-radius: 16px;
    padding: 0 10px;
`;

export const SearchFront = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const SearchProject = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: -0.03em;
    color: #888888;
`;

export const SearchEmo = styled.img`
    width: 19px;
    height: 19px;
`;

export const SearchRight = styled.div``;

export const SearchLine = styled.img`
    width: 16px;
    height: 16px;
`;

export const HeaderOption = styled.div`
    padding-left: 4%;
    display: flex;
    align-items: center;
    padding-right: 4%;
`;

export const HeaderQnaWrapper = styled.div`
    padding-right: 5%;
`;

export const HeaderSignup = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #ffffff;
`;

export const OptionAlarm = styled.img`
    width: 30px;
    height: 30px;
`;
export const OptionQna = styled.img`
    width: 33.25px;
    height: 33.25px;
`;
