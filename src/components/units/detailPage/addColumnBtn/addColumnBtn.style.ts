import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

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
  @media ${breakPoints.mobile} {
    width: 18.8rem;
    height: 4rem;
  }
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
  /* border: 1px solid red; */
`;

export const CategoryTitle = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
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
