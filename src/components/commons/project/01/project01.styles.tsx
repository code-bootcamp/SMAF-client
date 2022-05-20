import styled from "@emotion/styled";

export const card = styled.div`
  width: 31rem;
  height: 24rem;
  background-color: white;
  overflow: hidden;
  border-radius: 16px 16px 16px 16px;
  /* border: 1px solid red; */
`;

export const Container = styled.div`
  width: 31rem;
  height: 24rem;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  :hover {
    transform: translateY(-100%);
  }
`;

// 📌 1번 박스
export const box1 = styled.div`
  width: 31rem;
  height: 24rem;
  cursor: pointer;
  overflow: hidden;
`;
export const ImgBox = styled.img`
  width: 31rem;
  height: 16rem;
`;
export const TextBox = styled.div`
  width: 31rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0rem 0rem 1.6rem 1.6rem;
  padding: 1.4rem 8.7rem 1.9rem 2rem;
`;

export const MainTitle = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.6rem;
`;
export const SubTitle = styled.div`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #767676;
`;

// 📌 2번 박스
export const box2 = styled.div`
  padding-top: 2.4rem;
  height: 24rem;
  border-radius: 16px 16px 16px 16px;
  cursor: pointer;
`;
export const Title01 = styled.div`
  width: 20rem;
  height: 29px;
  font-weight: 700;
  font-size: 2rem;
  line-height: 29px;
  letter-spacing: -0.02em;
  color: #111111;
  margin-top: 1.8rem;
  margin-bottom: 0.4rem;
  margin-left: 2rem;
`;

export const Title02 = styled.div`
  width: 270px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: -0.02em;
  color: #111111;
  margin-left: 2rem;
  margin-bottom: 2.9rem;
`;
export const Title03 = styled.div`
  width: 16.3rem;
  height: 2rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #767676;
  margin-left: 2rem;
`;
