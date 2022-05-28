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
  justify-content: space-between;
  height: 130px;
  /* border: 1px solid blue; */
`;

export const CategoryTitle = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
`;

export const AddCategory = styled.div`
  width: 80%;
  height: 8rem;
  margin-top: 2rem;
  /* background: #f1f1f5; */
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

export const CategoryInput = styled.input`
  width: 90%;
  height: 4rem;
  padding-left: 10px;
  border: 2px solid #dbdbdb;
  border-radius: 8px;
  outline: none;
`;

export const CategoryBtn = styled.button`
  width: 8rem;
  height: 3.1rem;
  background: #49496e;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.02em;
  color: white;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: #6b6bff;
  }
`;
