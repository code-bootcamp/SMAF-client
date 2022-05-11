import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: beige;
  height: 400px;
  cursor: pointer;
  .slick-prev:before {
    opacity: 1;
    color: white;
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }
`;

export const Slick1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 370px;
`;

export const SlickD = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  font-size: 50px;
  font-weight: 700;
`;
export const SlickD2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  font-size: 20px;
  font-weight: 700;
`;

export const SlickN = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;
