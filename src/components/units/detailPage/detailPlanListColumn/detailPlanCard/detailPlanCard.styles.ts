import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

interface status {
  status: boolean;
  // fetchTrigers: boolean;
}

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 24rem;
  background-color: ${(props: status) => (props.status ? "white" : "#E4E4E4")};
  border-radius: 1.6rem;
  padding: 2rem;
  @media ${breakPoints.mobile} {
    width: 18.8rem;
    min-height: 14rem;
    padding: 2rem 2rem 0rem 2rem;
  }
`;

export const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  padding-bottom: 0.7rem;
  @media ${breakPoints.mobile} {
    width: 7,9rem;
    height: 2rem;
    margin-bottom: 1rem;
  }
`;

export const SpaceBetweenRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Contents = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-weight: 400;
  padding-bottom: 0.7rem;
  word-break:break-all;
  @media ${breakPoints.mobile} {
    width: 14.8rem;
  }
`;
export const Date = styled.div`
  display: felx;
  font-size: 1.4rem;
  font-weight: 400;
  color: #767676;
  @media ${breakPoints.mobile} {
    width: 14.8rem;
    height: 4rem;
  }
`;

export const TeamPerson = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 3rem;
  margin-bottom: 0.8rem;
  @media ${breakPoints.mobile} {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
