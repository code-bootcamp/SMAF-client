import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  
`;

export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AddColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: 700;
  width: 24rem;
  height: 6rem;
  border-radius: 1.6rem;
  background-color: #ffffff;
  padding: 0px 2rem;
  margin-right: 2rem;
  @media ${breakPoints.mobile} {
    width: 18.8rem;
    height: 4rem;
  }
`;
export const EditCoulumnIcon = styled.img`
  width: 1.6rem;
  height: 0.4rem;
  margin-right: 1.2rem;
  cursor: pointer;
`;

export const DropDown = styled.div`
  width: 24rem;
  background-color: white;
  border-radius: 1.6rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  align-items: center;
`;

export const DropMenu = styled.div`
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  font-weight: 700;
  border-bottom: 1px solid #bebebe;
  border-radius: 1.6rem;
  margin-bottom: 0.3rem;
  cursor: pointer;
  :hover {
    background-color: #bebebe;
  }
`;
export const AddCoulumnIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 1.2rem;
  cursor: pointer;
`;

export const ColumnTitle = styled.div`
  width: 14.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
