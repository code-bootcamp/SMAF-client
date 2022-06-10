import styled from "@emotion/styled";
import { breakPoints } from "../../../../../../commons/styles/media";

export const Wrapper = styled.div`
  /* padding-left: 22.1rem; */
  padding: 3rem 0rem 3rem 22.1rem;
  display: flex;
  border-top: 1px solid #ededed;
  @media ${breakPoints.mobile} {
    padding: 3rem 0rem 3rem 12rem;
  }
`;
export const AnswerIcon = styled.div`
  width: 1.46rem;
  height: 1.53rem;
  margin-right: 1.14rem;
`;

export const QuestionComment = styled.div`
  display: flex;
  width: 23.5rem;
  font-weight: 400;
  font-size: 1.6rem;
  background-color: white;

  margin-right: 1.7rem;
`;

export const Admin = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 1.6rem;
  background-color: white;
  padding-left: 0.35rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const CreateAt = styled.div`
  display: flex;
  justify-content: center;
  width: 12rem;
  display: flex;
  font-weight: 400;
  font-size: 1.6rem;
  background-color: white;

  margin-left: 3.6rem;
   @media ${breakPoints.mobile} {
    display: none;
  }
`;
