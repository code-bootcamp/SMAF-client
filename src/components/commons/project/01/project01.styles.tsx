import styled from "@emotion/styled";

export const card = styled.div`
  width: 31rem;
  height: 24rem;
  background-color: white;
  overflow: hidden;
  border-radius: 16px 16px 16px 16px;
  /* border: 1px solid red; */
  cursor: pointer;
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

// 📌 01 윗 박스
export const box1 = styled.div`
  width: 31rem;
  height: 24rem;
  cursor: pointer;
  overflow: hidden;
`;

// 프로젝트사진
export const ImgBox = styled.img`
  width: 31rem;
  height: 16rem;
`;

// 텍스트박스
export const TextBox = styled.div`
  width: 31rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0rem 0rem 1.6rem 1.6rem;
  padding: 1.4rem 2rem 1.9rem 2rem;
`;

// 프로젝트이름
export const MainTitle = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 프로젝트요약
export const SubTitle = styled.div`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #767676;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 📌 02 아래 박스
export const box2 = styled.div`
  width: 310px;
  height: 240px;
  padding: 24px 20px;
  border-radius: 16px 16px 16px 16px;
  cursor: pointer;
`;

// 프로젝트이름
export const Title01 = styled.div`
  font-weight: 700;
  font-size: 2rem;
  line-height: 29px;
  letter-spacing: -0.02em;
  margin-top: 18px;
  color: #111111;
  /* border: 1px solid red; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    font-size: 2.1rem;
  }
`;

// 프로젝트요약
export const Title02 = styled.div`
  margin-top: 4px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #111111;
`;

export const Date = styled.div`
  margin-top: 25px;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #767676;
  padding-top: 22px;
`;
