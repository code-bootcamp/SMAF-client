import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 192rem;
  margin: 0px;
  /* border: 1px solid black; */
  padding-top: 12rem;
  padding-bottom: 22rem;
`;
export const Container = styled.div`
  width: 88rem;
  border: 1px solid #dbdbdb;
  border-radius: 1.6rem;
  background-color: #ffffff;
`;
export const Title = styled.div`
  text-align: center;
  padding-bottom: 9rem;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4.64rem;
  letter-spacing: -2%;
`;
export const TableHeader = styled.div`
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 700;
  background-color: #dbdbdb;
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
  display: flex;
  align-items: center;
  padding: 1.2rem 0px 1.2rem 3rem;
  line-height: 2.4rem;
  letter-spacing: -2%;
`;
export const Table = styled.tr`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  padding: 3.1rem 0px 3.1rem 0px;
  border-bottom: 1px solid #c4c4c4;
  background-color: white;
  margin: 0px 3rem;
`;
export const TdNum = styled.div`
  width: 5.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.6rem;
`;
export const TdType = styled.div`
  width: 13.53rem;
  margin-right: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;
export const TdTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26.3rem;
  padding-left: 2rem;
  border: 1px solid black;
  margin-right: 3.7rem;
`;
export const TdWriter = styled.div`
  width: 8.5rem;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  margin-right: 3.6rem;
`;
export const TdDate = styled.div`
  width: 12.3rem;
  text-align: center;
`;
export const AnswerBtn = styled.button`
  width: 13%;
  background-color: #6b6bff;
  color: white;
  width: 8rem;
  height: 3.1rem;
  font-size: 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 0.8rem;
`;
export const QuestionBtn = styled.button`
  width: 13%;
  background-color: #333333;
  color: white;
  width: 8rem;
  height: 3.1rem;
  font-size: 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
`;
export const AnswerCompleteBtn = styled.button`
  background-color: #49496e;
  color: white;
  width: 8rem;
  height: 2.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 0.8rem;
`;
