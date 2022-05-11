import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: skyblue;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HomeBtn = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  background-color: skyblue;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 0px 20px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #85a5e9;
    border-color: #85a5e9;
  }
`;
