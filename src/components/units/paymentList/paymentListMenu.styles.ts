import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 192rem;
  display: flex;
  flex-direction: row;
  padding: 3.125% 16.5% 6.35% 16.5%;
  @media ${breakPoints.mobile} {
    width: 36rem;
    flex-direction: column;
    padding: 0% 0% 0% 0%;
  }
`;

// 표
export const Table = styled.div`
  height: 59.4rem;
  display: flex;
  flex-direction: column;
  margin-left: 110px;
  /* border: 1px solid red; */
  @media ${breakPoints.mobile} {
    margin-left: 0px;
    height: 32rem;
  }
`;

// 결제내역
export const Title = styled.div`
  text-align: left;
  padding-bottom: 2rem;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4.64rem;
  letter-spacing: -2%;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const PaymentMenuList = styled.div`
  width: 97rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  background: #e5e5ef;
  border-radius: 16px 16px 0px 0px;
  padding: 12px 0px 13px 38px;
  @media ${breakPoints.mobile} {
    width: 32rem;
    height: 3.2rem;
    padding: 0px 0px 0px 0px;
  }
`;

// 번호
export const TableMenuNo = styled.div`
  width: 5.4rem;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-left: 0.8rem;
  margin-right: 6rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

// 결제일
export const TableMenuPaymentDate = styled.div`
  width: 13.53rem;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-right: 7em;
  @media ${breakPoints.mobile} {
    width: 4.8rem;
    height: 1.6rem;
    font-size: 12px;
    line-height: 16px;
    margin-right: 5em;
  }
`;

// 결제상품
export const TableMenuProduct = styled.div`
  width: 5.8rem;
  margin-right: 9.8rem;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  @media ${breakPoints.mobile} {
    width: 5.1rem;
    height: 1.6rem;
    font-size: 12px;
    line-height: 16px;
    margin-right: 5em;
  }
`;

// 결제금액
export const TableMenuMoney = styled.div`
  width: 8.52rem;
  margin-right: 9.6rem;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  @media ${breakPoints.mobile} {
    width: 5.1rem;
    height: 1.6rem;
    font-size: 12px;
    line-height: 16px;
    margin-right: 0px;
  }
`;

// 작성일
export const TableMenuDate = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  width: 4.4rem;
  /* border: 1px solid red; */
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const PaymentObjectList = styled.div`
  width: 97rem;
  height: 480px;
  border-radius: 0 0 16px 16px;
  background-color: white;
  @media ${breakPoints.mobile} {
    width: 32rem;
    height: 280px;
  }
`;
