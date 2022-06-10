import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  background-color: white;
  border-radius: 1.6rem;
  padding: 1.5rem;
  @media ${breakPoints.mobile} {
    width: 32rem;
  }
`;
export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
`;

export const FileHiddenIcon = styled.img`
  width: 1.4rem;
  height: 0.7rem;
  margin-right: 1rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  @media ${breakPoints.mobile} {
    width: 32rem;
  }
`;
export const TeamPeople = styled.div``;
export const TeamPerson = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 3rem;
`;
export const Name = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.3rem;
  letter-spacing: -0.02em;
`;
export const Team = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0 0.7rem 0;
`;
export const Line = styled.div`
  border-bottom: 0.1rem solid #ededed;
  margin: 1.2rem 0rem;
`;
export const TeamPersonAdd = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 3rem;
  background-color: #333333;
  color: white;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.7rem;

  cursor: pointer;
`;
export const Member = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
`;

export const AddMember = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.2rem;
`;

export const BasicRow = styled.div`
  display: flex;
  align-items: center;
`;
export const RemoveBtn = styled.button`
  width: 4.6rem;
  height: 2.6rem;
  font-size: 1.2rem;
  background-color: #ededed;
  border-radius: 1.3rem;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #bdbdbd;
    color: black;
  }
`;
