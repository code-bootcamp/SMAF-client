import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.footer`
  width: 100%;
  height: 34.6rem;
  display: flex;
  flex-direction: column;
  /* background-color: beige; */
  @media ${breakPoints.mobile} {
    height: 18.8rem;
  }
`;

export const TopWrapper = styled.div`
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: orange; */
  border-bottom: 1px solid #dbdbdb;
`;

// 회사소개
export const Company = styled.div`
  display: flex;
  justify-content: center;
  width: 13.6rem;
  height: 2rem;
  border-right: 1px solid #dbdbdb;
  /* border: 1px solid red; */
  text-align: left;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.05em;
  color: #000000;
`;

// 이용약관
export const Terms = styled.div`
  display: flex;
  justify-content: center;
  width: 13.6rem;
  height: 2rem;
  /* border: 1px solid red; */
  border-right: 1px solid #dbdbdb;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.05em;
  color: #000000;
`;

// 개인정보처리방침
export const Info = styled.div`
  display: flex;
  justify-content: center;
  width: 13.6rem;
  height: 2rem;
  /* border: 1px solid red; */
  border-right: 1px solid #dbdbdb;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #000000;
`;

// 고객센터
export const Law = styled.div`
  display: flex;
  justify-content: center;
  width: 13.6rem;
  height: 2rem;
  /* border: 1px solid red; */
  border-right: 1px solid #dbdbdb;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #000000;
`;

// App 설치
export const App = styled.div`
  display: flex;
  justify-content: center;
  width: 13.6rem;
  height: 2rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #000000;
  /* border: 1px solid red; */
`;

// 하단전체박스
export const BottomWrapper = styled.div`
  height: 29rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
`;

export const SnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid red; */
`;

export const FaceBook = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 1.5rem;
  background: #e5e5ec;
  border-radius: 50%;

  span {
    position: relative;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    left: 40%;
    top: 10%;
    color: #ffffff;
  }
`;
export const Youtube = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 1.5rem;
  background: #e5e5ec;
  border-radius: 50%;
  span {
    display: block;
    background-image: url(/images/youtube.png);
    width: 80px;
    height: 80px;
  }
`;

export const Instagram = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 1.5rem;
  background: #e5e5ec;
  border-radius: 50%;
  span {
    display: block;
    border: 4px solid #ffffff;
    border-radius: 12px;
    width: 40px;
    height: 40px;
  }
`;

export const Copyright = styled.div`
  margin-top: 3.2rem;
  /* border: 1px solid red; */
  text-align: center;
  font-size: 1.3rem;
  color: #505050;
`;
