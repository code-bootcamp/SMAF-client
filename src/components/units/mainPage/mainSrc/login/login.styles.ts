import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
    padding: 0 10rem 0 10rem;
    @media ${breakPoints.mobile} {
        padding: 0rem;
        width: 32rem;
        display: flex;
        flex-direction: column;
    }
`;
export const Container = styled.div`
    width: 33rem;
    height: 66.6rem;
    background-color: white;
    border-radius: 1.6rem;
    margin: auto;
    padding: 6rem 2rem 2rem 4rem;
`;
export const Title = styled.div`
    font-size: 3.2rem;
    font-weight: 700;
    text-align: center;
    padding-bottom: 2rem;
`;
export const LoginForm = styled.form``;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Input = styled.input`
    color: #999999;
    width: 25rem;
    height: 4.8rem;
    border: none;
    border-bottom: 0.1rem solid #dbdbdb;
    padding-left: 1rem;
    margin-bottom: 1rem;
`;
export const CheckBox = styled.input`
    font-size: 1.2rem;
`;
export const Check = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 3rem;
`;
export const IdPw = styled.div`
    font-size: 1.2rem;
    color: #999999;
    padding-right: 2rem;
`;
export const LoginBtn = styled.button`
    width: 25rem;
    height: 4.8rem;
    font-weight: 700;
    font-size: 1.6rem;
    color: white;
    background-color: #333333;
    border-radius: 0.8rem;
    cursor: pointer;
    outline: none;
    border: none;
    :hover {
        background: #6b6bff;
    }
`;
export const SubTitle = styled.div`
    font-size: 1.6rem;
    text-align: center;
    font-weight: 500;
    padding: 4rem 0 2.5rem 0;
`;
export const GoogleBtn = styled.button`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 3rem;
    border: none;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 2.5rem;
    cursor: pointer;
`;
export const NaverBtn = styled.button`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 3rem;
    border: none;
    background-color: #1ec800;
    padding-left: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
export const KakaoBtn = styled.button`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 3rem;
    padding-left: 2.5rem;
    border: none;
    background-color: #ffeb3b;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
export const Logo = styled.img`
    width: 3rem;
    height: 3rem;
    margin-right: 2rem;
`;
export const Sns = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 5rem 0 2.5rem;
`;
export const Bottom = styled.div`
    padding-top: 3rem;
`;
export const JoinBtn = styled.button`
    width: 25rem;
    height: 4.8rem;
    border: 0.1rem solid #dbdbdb;
    background-color: #ffffff;
    border-radius: 0.8rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: #999999;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
        background: #6b6bff;
        color: white;
    }
`;
export const ToBeforeLogin = styled.button`
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    cursor: pointer;
    display: none;
`;

export const GoogleBotton = styled.button``;
