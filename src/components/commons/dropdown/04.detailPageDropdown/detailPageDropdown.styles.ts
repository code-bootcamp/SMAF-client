import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
`;

export const AddColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: 700;
  width: 24rem;
  height: 6rem;
  border-radius: 1.6rem;
  background-color: #ffffff;
  padding: 0px 2rem;
`;

export const AddCoulumnIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const NewCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryTitle = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddCategory = styled.div`
  width: 80%;
  height: 8rem;
  margin-top: 2rem;
  background: #f1f1f5;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CategoryInput = styled.input`
  width: 90%;
  height: 4rem;
`;

export const CategoryBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  margin-top: 3rem;
  border: none;
  cursor: pointer;
`;
