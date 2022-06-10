import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  /* border: 1px solid blue; */
`;

export const SearchWrapper = styled.div`
  width: 90%;
  margin: 10px auto;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 70%;
  height: 3.1rem;
  padding-left: 1.5rem;
  border: 2px solid #dbdbdb;
  border-radius: 8px;
  outline: none;
`;

// 팀원검색
export const SearchButton = styled.button`
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

export const InnerWrapper = styled.div`
  width: 100%;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 5rem;
  margin: 1px auto;
  align-items: center;
`;

export const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export const UserName = styled.div`
  width: 6rem;
  font-size: 1rem;
`;

export const Email = styled.div`
  width: 20rem;
  font-size: 1rem;
`;

// 초대하기
export const InviteButton = styled.button`
  width: 8rem;
  height: 3.1rem;
  border-radius: 8px;
  border: none;
  background: #49496e;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.3rem;
  letter-spacing: -0.02em;
  color: white;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: #6b6bff;
  }
`;
