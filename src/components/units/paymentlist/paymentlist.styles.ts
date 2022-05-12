import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const PaymentTitle = styled.div`
  width: 100%;
  height:46px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  border: 1px solid red;
  margin-top: 60px;
  margin-bottom: 18px;

`

export const PaymentWrapper = styled.div`
  width: 968px;
  height: 604px;
  border-radius: 8px;
  border: 1px solid blue;
`;

export const Row = styled.div`
  width: 100%;
  height: 40px;
  background: #E5E5EF;
  display: flex;
  flex-direction: row;
  line-height: 40px;
  `
export const ColumnHeaderNumber = styled.div`
  width: 12%;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  /* border: 1px solid red; */
`
export const ColumnHeaderBasic = styled.div`
  width: 18%;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  /* border: 1px solid red; */
`

export const ColumnHeaderCreatedAt = styled.div`
  width: 16%;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  /* border: 1px solid red; */
`
export const Row2 = styled.div`
  width: 100%;
  height: 63px;
  background: #fff;
  display: flex;
  flex-direction: row;

  line-height: 63px;
  /* border-bottom: 1px solid #C4C4C4; */
  `
export const Line = styled.div`
  width: 912px;
  height: 1px;
  background: #C4C4C4;
  margin: 0 auto;
`

export const ColumnNumber = styled.div`
  width: 12%;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 63px;
  text-align: center;
  /* border: 1px solid red; */
`
export const ColumnBasic = styled.div`
  width: 18%;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 63px;
  text-align: center;
  /* border: 1px solid red; */
`

export const ColumnCreatedAt = styled.div`
  width: 16%;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 63px;
  text-align: center;
  /* border: 1px solid red; */
`

// 버튼 함수 주기 환불하기, 사용완료
export const Button = styled.button`
  width: 80px;
  height: 28px;
  background: #6B6BFF;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`