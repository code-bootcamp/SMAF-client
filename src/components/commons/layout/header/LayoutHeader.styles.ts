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
    width: 3.6rem;
    height: 3.6rem;
`;

export const HeaderTitle = styled.div`
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: #ffffff;
    padding-left: 10%;

    /* border: 1px solid yellow; */
`;

export const HeaderSearch = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    width: 45%;
    background: #d9d9d9;
    border-radius: 1.6rem;
    border: none;
    font-size: 2rem;
    padding-left: 25rem;
    font-weight: 400;
    outline: none;

    background-image: url(/image/searchemo.png);
    background-repeat: no-repeat;
    background-size: 1.9rem;
    background-position: 56rem center;
`;

// export const SearchFront = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
// `;

// export const SearchProject = styled.div`
//     font-weight: 400;
//     font-size: 20px;
//     line-height: 36px;
//     letter-spacing: -0.03em;
//     color: #888888;
// `;

// export const SearchEmo = styled.img`
//     width: 19px;
//     height: 19px;
// `;

// export const SearchRight = styled.div``;

// export const SearchLine = styled.img`
//     width: 16px;
//     height: 16px;
// `;

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
    font-size: 1.8rem;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #ffffff;
`;

export const OptionAlarm = styled.img`
    width: 3rem;
    height: 3rem;
`;
export const OptionQna = styled.img`
    width: 3.325rem;
    height: 3.325rem;
`;
