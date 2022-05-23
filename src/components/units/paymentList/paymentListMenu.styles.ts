import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 128rem;
  padding-top: 6rem;
  padding-bottom: 12rem;
  /* border: 1px solid red; */
  @media ${breakPoints.mobile} {
  }
`;

// 오른쪽박스
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 97rem;
  margin-left: 9rem;
  /* border: 1px solid blue; */
`;

// 표
export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 528px;
  margin-bottom: 44px;
  /* border: 1px solid red; */
`;

// 결제내역
export const Title = styled.div`
  width: 116px;
  height: 46px;
  margin-bottom: 20px;
  /* border: 1px solid red; */
  text-align: left;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4.64rem;
  letter-spacing: -2%;
`;

export const PaymentMenuList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 4.8rem;
  /* border: 1px solid blue; */
  padding: 12px 208px 13px 38px;
  border-radius: 16px 16px 0px 0px;
  background: #e5e5ef;
`;

// 번호
export const TableMenuNo = styled.div`
  display: flex;
  justify-content: center;
  width: 5.4rem;
  margin-right: 6rem;
  /* border: 1px solid red; */
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

// 결제일
export const TableMenuPaymentDate = styled.div`
  display: flex;
  justify-content: center;
  width: 13.53rem;
  margin-right: 9.3rem;
  /* border: 1px solid red; */
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

// 결제상품
export const TableMenuProduct = styled.div`
  display: flex;
  justify-content: center;
  width: 5.8rem;
  margin-right: 9.8rem;
  /* border: 1px solid red; */
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

// 결제금액
export const TableMenuMoney = styled.div`
  display: flex;
  justify-content: center;
  width: 8.52rem;
  margin-right: 9.5rem;
  /* border: 1px solid red; */
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

// 작성일
export const TableMenuDate = styled.div`
  display: flex;
  justify-content: center;
  width: 4.4rem;
  /* border: 1px solid red; */
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const PaymentObjectList = styled.div`
  width: 97rem;
  height: 480px;
  border-radius: 0 0 16px 16px;
  background-color: white;
`;

export const Pagination = styled.div`
  width: 108px;
  height: 36px;
  margin: 0 auto;
  /* border: 1px solid red; */
  text-align: center;
  line-height: 36px;
`;
