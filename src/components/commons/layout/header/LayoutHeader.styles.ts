import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 9rem;
    /* border: 1px solid yellow; */
    background-color: #333333;
    @media ${breakPoints.mobile} {
        height: 5.6rem;
        justify-content: space-between;
        padding: 0 20px;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 4rem;
    /* border: 1px solid yellow; */
`;

export const Icon = styled.img`
    width: 3.6rem;
    height: 3.6rem;
    cursor: pointer;
    /* border: 1px solid green; */
    @media ${breakPoints.mobile} {
        width: 2.4rem;
        height: 2.4rem;
    }
`;

export const Logo = styled.div`
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: #ffffff;
    padding-left: 12px;
    cursor: pointer;
    /* border: 1px solid red; */
    @media ${breakPoints.mobile} {
        font-size: 1.8rem;
    }
    /* border: 1px solid yellow; */
`;

export const Search = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    width: 36.45%;
    background: #d9d9d9;
    border-radius: 2rem;
    border: none;
    font-size: 2rem;
    padding-left: 13.5%;
    font-weight: 400;
    outline: none;
    ::placeholder {
        padding: 0px 0px 0px 2.2rem;
        background-image: url(/image/searchemo.png);
        background-size: 1.9rem;
        background-repeat: no-repeat;
    }
    @media ${breakPoints.mobile} {
        display: none;
    }
`;

export const OptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* width: 22rem; */
    height: 100%;
    /* border: 1px solid green; */
    /* padding-left: 12.36rem; */
    padding-left: 8%;
    @media ${breakPoints.mobile} {
        height: 100%;
        padding-left: 0rem;
    }
`;

export const Alarm = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 1.5rem 0 1.5;
    @media ${breakPoints.mobile} {
        width: 2.4rem;
        height: 2.4rem;
    }
`;

export const Qna = styled.img`
    width: 4rem;
    height: 4rem;
    margin: 0 2rem 0 2rem;
    /* border: 1px solid yellow; */
    cursor: pointer;
    @media ${breakPoints.mobile} {
        width: 2.4rem;
        height: 2.4rem;
    }
`;

export const Signup = styled.div`
    /* border: 1px solid yellow; */
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin-left: 1.2rem;
    cursor: pointer;

    @media ${breakPoints.mobile} {
        display: none;
    }
`;

export const WelcomeText = styled.div`
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin-left: 1.2rem;

    @media ${breakPoints.mobile} {
        display: none;
    }
`;
