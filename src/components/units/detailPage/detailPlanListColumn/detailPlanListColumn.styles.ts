import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
`;
export const EditCoulumnIcon = styled.img`
  width: 1.6rem;
  height: 0.4rem;
  margin-right: 1.2rem;
  cursor: pointer;
`;
export const AddCoulumnIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const ColumnTitle = styled.div`
  width: 14.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
