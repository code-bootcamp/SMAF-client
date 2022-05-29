import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  /* padding: 120px 520px 120px 520px; */
  margin-top: 12rem;
  margin-bottom: 16rem;
  @media ${breakPoints.mobile} {
    margin-top: 3.1rem;
    margin-bottom: 6rem;
  }
`;

export const Container = styled.form`
  width: 88rem;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 32rem;
    /* height: 470px; */
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  line-height: 4.8rem;
  margin-bottom: 9rem;
  font-size: 3.2rem;
  @media ${breakPoints.mobile} {
    width: 32rem;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 26px;
    margin-bottom: 4rem;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 6rem;
  justify-content: space-between;
  margin-bottom: 4.8rem;
`;
export const Question = styled.input`
  float: right;
  height: 100%;
  width: 80%;
  border: 2px solid #dbdbdb;
  border-radius: 8px;
  outline: none;
  padding: 1rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.8rem;
  letter-spacing: -0.02em;
  color: #a3a3a3;

  @media ${breakPoints.mobile} {
    margin-top: 1.2rem;
    width: 100%;
    height: 4.6rem;
    color: #999999;
    font-size: 1.4rem;
    line-height: 1.4rem;
    margin-bottom: 1.2rem;
  }
`;

export const Content = styled.textarea`
  width: 100%;
  height: 62rem;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 12rem;
  padding: 10px;
  outline: none;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.8rem;
  letter-spacing: -0.02em;
  color: #a3a3a3;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;

  @media ${breakPoints.mobile} {
    margin-top: 1.2rem;
    width: 100%;
    height: 172px;
    margin-bottom: 6rem;
    color: #999999;
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
`;

export const Button = styled.button`
  width: 34.2rem;
  height: 9rem;
  border: 1px solid #dbdbdb;
  background: #333333;
  border-radius: 12px;
  color: #ffffff;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 4.1rem;
  text-align: center;
  cursor: pointer;
  :hover {
    background: #6b6bff;
  }

  @media ${breakPoints.mobile} {
    width: 32rem;
    height: 4.8rem;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.2rem;
    /* margin-top: 6rem; */
  }
`;
