import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

interface IOpenSchedules {
  isOpenSchedules: boolean;
}
export const Wrapper = styled.div`
  display: flex;
  padding: 10rem;
  @media ${breakPoints.mobile} {
    padding: 1.5rem;
    width: 36rem;
    height: ${(props: IOpenSchedules) =>
      props.isOpenSchedules ? "66rem" : "88rem"};
    display: flex;
    flex-direction: column;
  }
`;

export const Wrapper2 = styled.div`
  display: flex;
  padding: 10rem;
  @media ${breakPoints.mobile} {
    padding: 1.5rem;
    width: 36rem;
    height: 88rem;
    display: flex;
    flex-direction: column;
  }
`;

export const Calender = styled.div`
  display: flex;
  margin-left: 3rem;
  @media ${breakPoints.mobile} {
    width: 36rem;
    margin-left: -1.5rem;
    margin-bottom: 20px;
    position: relative;
    bottom: 20.5rem;
    display: ${(props: IOpenSchedules) =>
      props.isOpenSchedules ? "felx" : "none"};
  }
`;

export const Info = styled.div`
  margin-bottom: 3rem;
`;
export const ProjectList = styled.div`
  margin-bottom: 3rem;
  @media ${breakPoints.mobile} {
    display: ${(props: IOpenSchedules) =>
      props.isOpenSchedules ? "none" : "flex"};
  }
`;
