import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  padding: 10rem;
  @media ${breakPoints.mobile} {
    padding: 1.5rem;
    width: 36rem;
    height: 1210px;
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
  }
`;

export const Info = styled.div`
  margin-bottom: 3rem;
`;
