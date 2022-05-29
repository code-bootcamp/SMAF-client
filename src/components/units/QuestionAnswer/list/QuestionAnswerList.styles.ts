import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 192rem;
  margin: 0px;
  padding-top: 12rem;
  padding-bottom: 22rem;
  @media ${breakPoints.mobile} {
    padding-top: 8rem;
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
  @media ${breakPoints.mobile} {
    width: 32rem;
    padding: 0 1rem 0rem 1rem;
  }
`;

export const TableMenuNo = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
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
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  width: 13.53rem;
  margin-right: 1.6rem;
`;

export const TableMenuTitles = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  width: 26.3rem;
  @media ${breakPoints.mobile} {
    width: 20rem;
  }
`;

export const TableMenuWriter = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
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
  font-weight: 700;
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
  font-weight: 700;
  line-height: 4.64rem;
  letter-spacing: -2%;
  @media ${breakPoints.mobile} {
    padding-bottom: 3rem;
  }
`;

export const QusStionAnswerBtn = styled.button`
  width: 8.1rem;
  height: 2.8rem;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.02em;
  color: #ffffff;
  background: #333333;
  border-radius: 8px;
  outline: none;
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

export const QuestionList = styled.div`
  width: 88rem;
  border-radius: 16px;
  background-color: white;
  @media ${breakPoints.mobile} {
    width: 32rem;
  }
`;

export const Page = styled.div`
  padding: 3rem 0 0 18rem;
  @media ${breakPoints.mobile} {
    width: 32rem;
    padding: 0rem;
  }
`;
