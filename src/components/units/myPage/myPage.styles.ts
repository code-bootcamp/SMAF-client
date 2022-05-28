import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 128rem;
  padding-top: 6rem;
  padding-bottom: 12rem;
  /* border: 1px solid red; */
  @media ${breakPoints.mobile} {
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 97rem;
  margin-left: 9rem;
  /* border: 1px solid blue; */
  border-radius: 8px;
  @media ${breakPoints.mobile} {
  }
`;

export const InnerWrapper = styled.div`
  height: 30.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* border: 1px solid green; */
`;

export const ProjectTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4.6rem;
  margin-bottom: 2rem;
`;

export const Slider01 = styled.div`
  height: 24rem;
  width: 97rem;
  /* border: 2px solid green; */
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export const Title = styled.div`
  height: 100%;
  font-weight: 700;
  font-size: 3.2rem;
  @media ${breakPoints.mobile} {
  }
`;

export const AddButton = styled.button`
  width: 15.8rem;
  height: 4.6rem;
  border: none;
  border-radius: 12px;
  background: #333333;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 46px;
  outline: none;
  :hover {
    background: #6b6bff;
  }
  cursor: pointer;
  @media ${breakPoints.mobile} {
  }
`;

export const DateButton = styled.button`
  width: 8.9rem;
  height: 3.6rem;
  border: none;
  border-radius: 12px;
  background: #ffffff;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 3.6rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
  }
`;
