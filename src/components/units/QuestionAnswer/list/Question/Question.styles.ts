import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 192rem;
  margin: 0px;
  padding-top: 12rem;
  padding-bottom: 22rem;
`;

export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasicRow = styled.div`
  display: flex;
  padding-bottom: 3rem;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.8rem 3rem 0rem 3rem;
  background-color: white;
  border-radius: 0px 0px 16px 16px;
  border-bottom: 1px solid #ededed;
  color: #111111;
  @media ${breakPoints.mobile} {
    padding: 2.8rem 1rem 0rem 1rem;
  }
`;

export const QuestionMenuList = styled.div`
  display: flex;
  align-items: center;
  width: 88rem;
  height: 4.8rem;
  background: #e5e5ef;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 30px;
`;

export const TableMenuNo = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 5.4rem;
  margin-right: 1.6rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const TableMenuTypes = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 13.53rem;
  margin-right: 1.6rem;
`;

export const TableMenuTitles = styled.div`
  display: flex;
  justify-content: flex-start;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 26.3rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 20rem;
  }
`;

export const TableMenuWriter = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 8.52rem;
  margin-right: 1.6rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const TableMenuDate = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 12rem;
  margin-right: 1.875rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const Title = styled.div`
  text-align: center;
  padding-bottom: 9rem;
  font-size: 3.2rem;
  font-weight: 400;
  line-height: 4.64rem;
  letter-spacing: -2%;
`;

export const QusStionAnswerBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.1rem;
  height: 2.8rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.8rem;
  letter-spacing: -0.02em;
  color: #ffffff;
  background: #333333;
  border-radius: 0.8rem;
  text-align: center;
  border: none;
  cursor: pointer;
  :hover {
    background: #6b6bff;
  }
  @media ${breakPoints.mobile} {
  width: 7.2rem;
  height: 2.4rem;
  font-size: 0.4rem;
  line-height: 1rem;
  }
`;

export const AnswerSubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.1rem;
  height: 2.8rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.8rem;
  letter-spacing: -0.02em;
  color: #ffffff;
  background: #333333;
  border-radius: 0.8rem;
  margin-left: 4.6rem;
  cursor: pointer;
`;

export const QuestionList = styled.div`
  width: 88rem;
  border-radius: 1.6rem;
  background-color: white;
`;

export const Question = styled.div`
  display: flex;
  width: 26.3rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;
  letter-spacing: -2%;
  margin-left: 22.1rem;
  margin-bottom: 2.8rem;
  color: #505050;
`;

export const AnswerWriteArea = styled.div`
  display: flex;
  padding: 3rem 1.3rem 3rem 3rem;
  margin-bottom: 3rem;
`;

export const AnswerIcon = styled.div`
  margin-left: 22.1rem;
`;
