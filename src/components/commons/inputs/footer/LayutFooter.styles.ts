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
`;

// 회사소개
export const Company = styled.div`
  width: 7rem;
  height: 2rem;
  border-right: 1px solid #dbdbdb;
  text-align: left;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.05em;
  color: #000000;
`;

// 이용약관
export const Terms = styled.div`
  width: 8.9rem;
  height: 2rem;
  border-right: 1px solid #dbdbdb;
  text-align: center;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.05em;
  color: #000000;
`;

// 개인정보처리방침
export const Info = styled.div`
  width: 14rem;
  height: 2rem;
  text-align: center;
  border-right: 1px solid #dbdbdb;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #000000;
`;

// 청소년보호방침
export const Law = styled.div`
  width: 12.7rem;
  height: 2rem;
  text-align: center;
  border-right: 1px solid #dbdbdb;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #000000;
`;

// 입정/제휴문의
export const Partnership = styled.div`
  width: 12rem;
  height: 2rem;
  text-align: center;
  border-right: 1px solid #dbdbdb;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.05em;
  color: #000000;
`;

// 대량구매문의
export const BulkPurchaese = styled.div`
  width: 11.4rem;
  height: 2rem;
  text-align: center;
  border-right: 1px solid #dbdbdb;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.05em;
  color: #000000;
`;

// 매장안내
export const Store = styled.div`
  width: 7rem;
  height: 2rem;
  font-weight: 400;
  font-size: 1.4rem;
  text-align: right;
  line-height: 2rem;
  letter-spacing: -0.05em;
  color: #000000;
  justify-content: center;
  margin-right: 26%;
`;

// 파트너센터
export const Patner = styled.div`
  width: 6.4rem;
  height: 2rem;
  text-align: right;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.05em;
  color: #000000;
  justify-content: center;
`;

// 하단전체박스
export const BottomWrapper = styled.div`
  height: 29rem;
  /* background-color: yellow; */
`;

export const InnerWrapper = styled.div`
  height: 20rem;
  margin-top: 4.8rem;
  /* background-color: beige; */
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
`;

// 좌측 전체박스
export const CompanyWrapper = styled.div`
  width: 40%;
  /* border: 1px solid blue; */
  margin-right: 16.4%;
`;

export const Title = styled.div`
  font-size: 2.4rem;
  line-height: 100%;
  /* padding-left: 1%; */
`;

export const CompanyInfo = styled.div`
  display: flex;
  padding-top: 2%;
  /* text-align: left; */
`;

export const Ceo = styled.div`
  font-size: 1.3rem;
  line-height: 100%;
  border-right: 1px solid #dbdbdb;
  /* padding: 0 1.5% 0 1.5%; */
`;

export const Address = styled.div`
  font-size: 1.3rem;
  line-height: 100%;
  border-right: 1px solid #dbdbdb;
  padding: 0 1.5% 0 1.5%;
`;

export const Hosting = styled.div`
  font-size: 1.3rem;
  line-height: 100%;
  border-right: 1px solid #dbdbdb;
  padding: 0 1.5% 0 1.5%;
`;

export const Pronunciation = styled.div`
  font-size: 1.3rem;
  line-height: 100%;
  padding: 0 1.5% 0 1.5%;
`;

export const Communication = styled.div`
  display: flex;
  padding-top: 2%;
`;

export const Report = styled.div`
  font-size: 1.3rem;
  line-height: 100%;
  border-right: 1px solid #dbdbdb;
  /* padding: 0 1.5% 0 1.5%; */
`;

export const Email = styled.div`
  font-size: 1.3rem;
  line-height: 100%;
  padding-left: 2%;
`;

export const Consumer = styled.div`
  padding-top: 4%;
  /* padding-left: 1%; */
`;

export const Reward = styled.div`
  font-size: 1.3rem;
  line-height: 100%;
  font-weight: 500;
  color: #111111;
`;

export const Rewardment = styled.div`
  font-size: 1.3rem;
  line-height: 100%;
  padding-top: 2%;
  letter-spacing: -5%;
`;

export const Copyright = styled.div`
  font-size: 1.3rem;
  line-height: 100%;
  padding-top: 1%;
`;

export const FooterService = styled.div`
  flex-direction: column;
`;

// 📌 우측 전체
export const ServiceWrapper = styled.div`
  /* border: 1px solid blue; */
`;

// 고객센터
export const Call = styled.div`
  line-height: 100%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.5rem;
`;

// 운영시간
export const Time = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.7rem;
  letter-spacing: -0.02em;
  color: #111111;
  margin-top: 1.3rem;
`;

// 문의하기 버튼
export const ServiceButton = styled.button`
  margin-top: 9px;
  width: 10rem;
  height: 2rem;
  font-size: 1.2rem;
  line-height: 100%;
  background-color: white;
  border: 1px solid #dbdbdb;
`;
