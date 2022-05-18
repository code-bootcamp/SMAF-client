import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  padding: 60px 320px 120px 320px;
`;

export const Container = styled.div`
  width: 100%;
  height: 668px;
  display: flex;
  flex-direction: row;
  /* border: 1px solid red; */
  /* margin: 60px auto; */
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const listWrapper = styled.div`
  padding-left: 91px;
  /* border: 1px solid blue; */
`;

// 결제내역
export const PaymentTitle = styled.div`
  width: 100%;
  /* height:46px; */
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 3.2rem;
  /* border: 1px solid red; */
  padding-bottom: 19px;
`;

// 결제상자
export const PaymentWrapper = styled.div`
  width: 970px;
  /* width: calc(100% - 95px); */
  height: 562px;
  border-radius: 8px;
  background-color: white;
  border-radius: 16px 16px 16px 16px;
  /* border: 1px solid red; */
`;

// 헤더 열
export const Row = styled.div`
  width: 100%;
  height: 40px;
  background: #dbdbdb;
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: row;
  line-height: 40px;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
`;
// 번호
export const ColumnHeaderNumber = styled.div`
  width: 10%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 40px;
  text-align: center;
  /* border: 1px solid red; */
  font-weight: 700;
`;
// 결제일
export const ColumnHeaderPaymentDate = styled.div`
  width: 24%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 40px;
  text-align: center;
  /* border: 1px solid red; */
  font-weight: 700;
`;
// 결제상품
export const ColumnHeaderProduct = styled.div`
  width: 17%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 40px;
  text-align: center;
  /* border: 1px solid red; */
  font-weight: 700;
`;
// 결제금액
export const ColumnHeaderPaymentMoney = styled.div`
  width: 20%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 40px;
  text-align: center;
  /* border: 1px solid red; */
  font-weight: 700;
`;
// 작성일
export const ColumnHeaderCreatedAt = styled.div`
  width: 16%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 40px;
  text-align: center;
  /* border: 1px solid red; */
  font-weight: 700;
`;
// 빈칸
export const ColumnHeaderBasic = styled.div`
  width: 12%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 40px;
  text-align: center;
  /* border: 1px solid red; */
`;

// 리스트 열
export const Row2 = styled.div`
  width: 100%;
  height: 79px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  line-height: 79px;
  /* border-bottom: 1px solid #C4C4C4; */
  padding: 0 40px;
`;
// 선
export const Line = styled.div`
  width: 890px;
  height: 1px;
  background: #c4c4c4;
  margin: 0 auto;
`;
// 번호
export const ColumnNumber = styled.div`
  width: 10%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 63px;
  text-align: center;
  /* border: 1px solid red; */
`;
// 결제일
export const ColumnPaymentDate = styled.div`
  width: 24%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 63px;
  text-align: center;
  /* border: 1px solid red; */
`;
// 결제상품
export const ColumnProduct = styled.div`
  width: 17%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 63px;
  text-align: center;
  /* border: 1px solid red; */
`;
// 결제금액
export const ColumnPaymentMoney = styled.div`
  width: 20%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 63px;
  text-align: center;
  /* border: 1px solid red; */
`;
// 작성일
export const ColumnCreatedAt = styled.div`
  width: 16%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 63px;
  text-align: center;
  /* border: 1px solid red; */
`;
// 빈칸
export const ColumnButton = styled.div`
  width: 12%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 63px;
  text-align: center;
  /* border: 1px solid red; */
`;

// 버튼 함수 주기 환불하기, 사용완료
export const Button = styled.button`
  width: 80px;
  height: 28px;
  background: #333333;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
