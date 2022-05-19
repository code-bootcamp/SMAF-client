import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2.9rem;
  background-color: white;
  border-radius: 0px 0px 16px 16px;
  padding-left: 4.3rem;
  padding-right: 4.3rem;
  color: #111111;
  @media ${breakPoints.mobile} {
    padding-top: 2rem;
    padding-left: 2.2rem;
    padding-right: 2.2rem;
  }
`;

// export const BasicColumn = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

export const line = styled.div`
  margin: 0 auto;
  width: 890px;
  margin-top: 27px;
  border: 1px solid #ededed; ;
`;

export const BasicRow = styled.div`
  display: flex;
`;

// 번호
export const TableMenuNo = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 5.4rem;
  margin-right: 8.3rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

// 2022-05-20
export const TableMenuPaymentDate = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 13.53rem;
  margin-right: 7.5em;
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
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 5.8rem;
  margin-right: 11rem;
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
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 8.52rem;
  margin-right: 7rem;
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
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 11.9rem;
  margin-right: 3.4rem;
  /* border: 1px solid red; */
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

// 버튼 함수 주기 환불하기, 사용완료
export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 8rem;
  height: 2.8rem;
  background: #f0f0f0;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.02em;
  color: #999999;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
