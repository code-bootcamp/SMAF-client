import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 120px 520px 120px 520px;
`;

export const Container = styled.form`
  width: 880px;
  /* height: 667px; */
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  line-height: 4.8rem;
  padding-bottom: 90px;
  /* border: 1px solid red; */
  font-size: 3.2rem;
  /* color: red; */
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 6rem;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 48px;
`;
export const SelectQuestion = styled.div``;
export const Question = styled.input`
  height: 100%;
  width: 80%;
  border: 2px solid #dbdbdb;
  /* border: 2px solid blue; */
  border-radius: 8px;
  outline: none;
  padding: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.8rem;
  /* identical to box height, or 140% */
  letter-spacing: -0.02em;
  color: #a3a3a3;
`;

export const Content = styled.input`
  width: 100%;
  height: 62rem;
  background: #ffffff;
  border: 2px solid #dbdbdb;
  border-radius: 8px;
  margin-bottom: 120px;
  padding: 10px;
  outline: none;
  padding-bottom: 571px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.8rem;
  /* identical to box height, or 140% */
  letter-spacing: -0.02em;
  color: #a3a3a3;
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
`;
