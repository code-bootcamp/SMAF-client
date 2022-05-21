import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 128rem;
  display: flex;
  flex-direction: row;
  /* border: 1px solid blue; */
  padding-top: 6rem;
  padding-bottom: 12rem;
  @media ${breakPoints.mobile} {
  }
`;

export const RightWrapper = styled.div`
  width: 97rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 9rem;
  border-radius: 8px;
  @media ${breakPoints.mobile} {
  }
`;

export const InnerWrapper = styled.div`
  height: 30.6rem;
  /* border: 1px solid red; */
`;

export const ProjectTitle = styled.div`
  height: 4.6rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  height: 100%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 3.2rem;
  @media ${breakPoints.mobile} {
    /* font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.6rem; */
  }
`;

export const ProjectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 970px;
  /* overflow: hidden; */
`;

export const Scroll = styled.div`
  width: 970px;
  height: 240px;
  overflow: auto;
  /* overflow: scroll; */
`;

export const AddButton = styled.button`
  width: 15.8rem;
  height: 4.6rem;
  background: #333333;
  border-radius: 12px;
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 46px;
  color: #ffffff;
  cursor: pointer;
  @media ${breakPoints.mobile} {
  }
`;

export const DateButton = styled.button`
  width: 8.9rem;
  height: 3.6rem;
  background: #ffffff;
  border-radius: 12px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 3.6rem;
  border: none;
  cursor: pointer;
  @media ${breakPoints.mobile} {
  }
`;

// 캐러셀
