import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
    /* padding: 120px 520px 160px 520px; */
    margin-top: 12rem;
    margin-bottom: 16rem;
    @media ${breakPoints.mobile} {
        margin-top: 3.1rem;
        margin-bottom: 6rem;
    }
`;

export const Container = styled.form`
    width: 88rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: 1px solid blue; */
    @media ${breakPoints.mobile} {
        width: 32rem;
    }
`;

export const ChangePasswordForm = styled.form``;

export const Title = styled.div`
    width: 100%;
    height: 4.1rem;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 4.6rem;
    text-align: center;
    margin-bottom: 9rem;

    @media ${breakPoints.mobile} {
        font-size: 1.8rem;
        line-height: 26px;
        letter-spacing: -0.02em;
        margin-bottom: 2.8rem;
    }
`;

export const SubTitle = styled.div`
    width: 100%;
    height: 4.2rem;
    line-height: 4.2rem;
    text-align: left;
    margin-bottom: 2rem;
    /* border: 1px solid red; */
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 2.8rem;
    letter-spacing: -0.02em;
    color: #111111;

    @media ${breakPoints.mobile} {
        width: 100%;
        height: 1.6rem;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 16px;
    }
`;

export const SubInput = styled.input`
    width: 100%;
    height: 6rem;
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    outline: none;
    margin-bottom: 8rem;
    padding: 10px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.8rem;
    letter-spacing: -0.02em;
    color: #999999;

    @media ${breakPoints.mobile} {
        width: 100%;
        height: 4.8rem;
        font-size: 1.4rem;
        line-height: 1.4rem;
        margin-bottom: 2.8rem;
    }
`;

export const NumberWrapper = styled.div`
    width: 100%;
    height: 6rem;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3.6rem;
    @media ${breakPoints.mobile} {
        height: 4rem;
        margin-bottom: 1.2rem;
    }
`;

export const NumberInput = styled.input`
    /* border: 1px solid red; */
    width: 64%;
    height: 100%;
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    outline: none;
    margin-bottom: 1.2rem;
    padding: 1rem;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.8rem;
    letter-spacing: -0.02em;
    color: #999999;

    @media ${breakPoints.mobile} {
        width: 20.8rem;
        height: 4rem;
        font-size: 1.4rem;
        line-height: 1.4rem;
    }
`;

export const NumberButton = styled.button`
    width: 24rem;
    height: 6rem;
    background: #333333;
    border-radius: 8px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.9rem;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;
    border: none;
    margin-left: 23.6px;
    cursor: pointer;

    @media ${breakPoints.mobile} {
        width: 10rem;
        height: 4rem;
        font-size: 1.4rem;
        line-height: 1.6rem;
    }
`;

export const Authorization = styled.div`
    width: 100%;
    height: 2.6rem;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: #2764ff;
    margin-bottom: 8rem;
    margin-top: -1.5rem;
    /* border: 1px solid blue; */

    @media ${breakPoints.mobile} {
        margin-top: 0.8rem;
        height: 1.8rem;
        font-size: 1.2rem;
        line-height: 1.8rem;
        margin-bottom: 2.8rem;
    }
`;

export const PasswordInput = styled.input`
    width: 100%;
    height: 6rem;
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    outline: none;
    margin-bottom: 3.6rem;
    padding: 10px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.8rem;
    letter-spacing: -0.02em;
    color: #999999;
    @media ${breakPoints.mobile} {
        width: 100%;
        height: 4.8rem;
        font-size: 1.4rem;
        line-height: 1.4rem;
        margin-bottom: 2.8rem;
    }
`;

export const PasswordAuthorization = styled.div`
    width: 100%;
    height: 2.6rem;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 26px;
    color: #dc0000;
    margin-top: -15px;
    /* border: 1px solid blue; */

    @media ${breakPoints.mobile} {
        /* margin-top: 8px; */
        height: 1.8rem;
        font-size: 1.2rem;
        line-height: 1.8rem;
    }
`;

export const Button = styled.button`
    width: 39.8rem;
    height: 9rem;
    background: #333333;
    border-radius: 12px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 4.1rem;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    /* margin: 44px auto; */
    margin-top: 24rem;
    margin-left: auto;
    margin-right: auto;

    @media ${breakPoints.mobile} {
        width: 32rem;
        height: 4.8rem;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 2.2rem;
        margin-top: 6rem;
        margin-bottom: 6rem;
    }
`;
