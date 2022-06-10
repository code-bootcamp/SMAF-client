import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";


export const Wrapper = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 17.5rem;
  @media ${breakPoints.mobile} {
  width: 80%;
  margin: auto;
  margin-top: 2rem;
  }
`;
export const Pre = styled.span`
  text-align: center;
`;

export const Next = styled.span`
  text-align: center;
`;
export const PageNum = styled.div`
  font-size: 15px;
  cursor: pointer;
`;
