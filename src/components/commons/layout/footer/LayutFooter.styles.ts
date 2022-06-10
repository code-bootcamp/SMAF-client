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
  @media ${breakPoints.mobile} {
    padding-top: 22px;
    border-bottom: none;
  }
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
  @media ${breakPoints.mobile} {
    display: none;
  }
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
  @media ${breakPoints.mobile} {
    justify-content: center;
  }
`;

export const Logo = styled.div`
  display: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #111111;
  @media ${breakPoints.mobile} {
    font-weight: 700;
    font-size: 14px;
    display: flex;
    line-height: 20px;
    letter-spacing: -0.05em;
    /* border: 1px solid blue; */
    padding-top: 16px;
    margin-right: 255px;
  }
`;

export const SnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media ${breakPoints.mobile} {
    flex-direction: flex-start;
    /* border: 1px solid red; */
    margin-top: 20px;
    padding-bottom: 24px;
    margin-right: 212px;
  }
`;

export const FaceBook = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 28px;
    height: 28px;
    margin: 0 0.5rem;
  }
`;
export const Youtube = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 28px;
    height: 28px;
    margin: 0 0.5rem;
  }
`;

export const Instagram = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 28px;
    height: 28px;
    margin: 0 0.5rem;
  }
`;

export const Copyright = styled.div`
  margin-top: 3.2rem;
  /* border: 1px solid red; */
  text-align: center;
  font-size: 1.3rem;
  color: #505050;
  @media ${breakPoints.mobile} {
    /* border: 1px solid red; */
    margin-top: 0rem;
    margin-bottom: 3.2rem;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
  }
`;
