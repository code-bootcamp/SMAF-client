import styled from "@emotion/styled";

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
`;

export const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  padding-bottom: 0.7rem;
`;

export const SpaceBetweenRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Contents = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  padding-bottom: 0.7rem;
`;
export const Date = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: #767676;
`;

export const TeamPerson = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 3rem;
  margin-bottom: 0.8rem;
`;
