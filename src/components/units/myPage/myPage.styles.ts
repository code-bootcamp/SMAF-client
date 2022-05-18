import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import UserInfoCard from "../../commons/userInfoCard/userInfoCard.container";

export const Wrapper = styled.div`
  /* width: 1980px; */
  /* height: 854px; */
  /* padding: 6rem 32rem 12rem 32rem; */
  margin-top: 12rem;
  margin-bottom: 16rem;
  @media ${breakPoints.mobile} {
    margin-top: 3.1rem;
    margin-bottom: 6rem;
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid pink;
`;

export const UserInfoCardBox = styled(UserInfoCard)`
  float: left;
  @media ${breakPoints.mobile} {
    float: none;
  }
`;

export const ProjectWrapper = styled.div`
  float: right;
  width: 96.8rem;
  height: 66.8rem;
  border-radius: 8px;
  padding-left: 9.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid blue; */
`;
export const ProjectWrapper2 = styled.div`
  width: 100%;
  height: 30.4rem;
  /* border: 1px solid green; */
`;
export const Wrapper2 = styled.div`
  height: 6.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid red; */
`;
export const Title = styled.div`
  /* width: 70%; */
  height: 4.8rem;
  /* border: 1px solid blue; */
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 3.2rem;
`;

export const AddButton = styled.button`
  width: 15.8rem;
  height: 4.6rem;
  background: #333333;
  border-radius: 12px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 46px;
  color: #ffffff;
  cursor: pointer;
`;

export const DateButton = styled.button`
  width: 8.9rem;
  height: 3.6rem;
  background: #ffffff;
  border-radius: 12px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 3.6rem;
  border: none;
  cursor: pointer;
`;
