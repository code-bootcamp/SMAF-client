import styled from "@emotion/styled";

export const QuestionAnswerWrapper = styled.form`
  width: 880px;
  /* height: 667px; */
  margin-top: 120px;
  margin-bottom: 160px;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  width: 100%;
  height:48px;
  text-align: center;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 90px;
  /* border: 1px solid red; */
  font-size: 32px;
  line-height: 41px;
  /* color: red; */
`

export const InputWrapper =styled.div`
  width: 100%;
  height: 60px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 48px;
`
export const SelectQuestion = styled.div`

`
export const Question = styled.input`
  height: 60px;
  width: 704px;
  border: 2px solid #DBDBDB;
  border-radius: 8px;
  outline: none;
  padding: 10px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */
  letter-spacing: -0.02em;
  color: #A3A3A3;

`

export const Content = styled.input`
  width: 100%;
  height: 620px;
  background: #FFFFFF;
  border: 2px solid #DBDBDB;
  border-radius: 8px;
  margin-bottom: 120px;
  padding: 10px;
  outline: none;
  padding-bottom: 571px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */
  letter-spacing: -0.02em;
  color: #A3A3A3;

`

export const Button = styled.button`
  width: 342px;
  height: 90px;
  border: 1px solid #DBDBDB;
  background: #333333;
  border-radius: 12px;
  color: #FFFFFF;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 41px;
  text-align: center;
  cursor: pointer;
`