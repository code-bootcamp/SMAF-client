import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1279px;
  height: 668px;
  display: flex;
  flex-direction: row;
  /* border: 1px solid red; */
  margin: 60px auto;
`;

export const listWrapper = styled.div`
  margin-left: 91px;
`
export const PaymentTitle = styled.div`
  width: 968px;
  height:46px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  /* border: 1px solid red; */
  margin-bottom: 18px;
`

export const PaymentWrapper = styled.div`
  width: 968px;
  height: 604px;
  border-radius: 8px;
  background-color: white;
  /* border: 1px solid blue; */
`;

export const Row = styled.div`
  width: 100%;
  height: 40px;
  background: #E5E5EF;
  border-radius:8px 8px 0px 0px;
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
  background: #49496E;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`