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

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 88rem;
    @media ${breakPoints.mobile} {
        width: 32rem;
    }
`;

export const ChangePasswordForm = styled.form``;

export const Title = styled.div`
    width: 100%;
    height: 4.1rem;
    margin-bottom: 9rem;
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 4.6rem;
    text-align: center;

    @media ${breakPoints.mobile} {
        margin-bottom: 2.8rem;
        font-size: 1.8rem;
        line-height: 26px;
        letter-spacing: -0.02em;
    }
`;

export const SubTitle = styled.div`
    width: 100%;
    height: 4.2rem;
    margin-bottom: 2rem;
    /* border: 1px solid red; */
    line-height: 4.2rem;
    font-size: 2.8rem;
    text-align: left;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: #111111;

    @media ${breakPoints.mobile} {
        width: 100%;
        height: 1.6rem;
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
    }
`;

export const SubInput = styled.input`
    width: 100%;
    height: 6rem;
    padding: 10px;
    margin-bottom: 7rem;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    background: #ffffff;
    outline: none;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.8rem;
    letter-spacing: -0.02em;
    color: #999999;

    @media ${breakPoints.mobile} {
        width: 100%;
        height: 4.8rem;
        margin-bottom: 2.8rem;
        font-size: 1.4rem;
        line-height: 1.4rem;
    }
`;

export const NumberWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 6rem;
    margin-bottom: 3.6rem;
    /* border: 1px solid red; */
    @media ${breakPoints.mobile} {
        height: 4rem;
        margin-bottom: 1.2rem;
    }
`;

export const NumberInput = styled.input`
    width: 64%;
    height: 100%;
    padding: 1rem;
    margin-bottom: 1.2rem;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    background: #ffffff;
    outline: none;
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
    margin-left: 23.6px;
    border: none;
    border-radius: 8px;
    background: #333333;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.9rem;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;
    cursor: pointer;
    border: none;
    :hover {
        background: #6b6bff;
    }
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
    margin-top: -1.5rem;
    margin-bottom: 8rem;
    /* border: 1px solid blue; */
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: #2764ff;

    @media ${breakPoints.mobile} {
        height: 1.8rem;
        margin-top: 0.8rem;
        margin-bottom: 2.8rem;
        font-size: 1.2rem;
        line-height: 1.8rem;
    }
`;

export const PasswordInput = styled.input`
    width: 100%;
    height: 6rem;
    padding: 10px;
    margin-bottom: 3rem;
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    outline: none;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.8rem;
    letter-spacing: -0.02em;
    color: #999999;
    @media ${breakPoints.mobile} {
        width: 100%;
        height: 4.8rem;
        margin-bottom: 2.8rem;
        font-size: 1.4rem;
        line-height: 1.4rem;
    }
`;

export const PasswordAuthorization = styled.div`
    width: 100%;
    height: 2.6rem;
    margin-top: -15px;
    /* border: 1px solid blue; */
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 26px;
    color: #dc0000;

    @media ${breakPoints.mobile} {
        height: 1.8rem;
        /* margin-top: 8px; */
        font-size: 1.2rem;
        line-height: 1.8rem;
    }
`;
export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Button = styled.button`
    width: 39.8rem;
    height: 9rem;
    margin-top: 24rem;
    border-radius: 12px;
    background: #333333;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 4.1rem;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;
    cursor: pointer;
    border: none;
    :hover {
        background: #6b6bff;
    }

    @media ${breakPoints.mobile} {
        width: 32rem;
        height: 4.8rem;
        margin-top: 6rem;
        margin-bottom: 6rem;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 2.2rem;
    }
`;

export const ErrorMsg = styled.div`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.6rem;
    margin-bottom: 2rem;
    color: #dc0000;
    @media ${breakPoints.mobile} {
        color: #dc0000;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
    }
`;

export const ErrorPhoneMsg = styled.div`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.6rem;
    color: #dc0000;
    margin-bottom: 2rem;
    @media ${breakPoints.mobile} {
        color: #dc0000;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
    }
`;
