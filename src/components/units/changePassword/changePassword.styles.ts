import styled from "@emotion/styled";

export const Wrapper = styled.form`
  padding: 120px 520px 160px 520px;
`;

export const Container = styled.form`
  width: 880px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid blueviolet; */
`;

export const Title = styled.div`
  width: 100%;
  height: 41px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 4.6rem;
  text-align: center;
  margin-bottom: 90px;
`;

export const SubTitle = styled.div`
  width: 100%;
  height: 42px;
  line-height: 4.2rem;
  text-align: left;
  margin-bottom: 20px;
  /* border: 1px solid red; */
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 2.8rem;
  letter-spacing: -0.02em;
  color: #111111;
`;
export const SubInput = styled.input`
  width: 100%;
  height: 60px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  outline: none;
  margin-bottom: 80px;
  padding: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.8rem;
  letter-spacing: -0.02em;
  color: #999999;
`;
export const NumberWrapper = styled.div`
  width: 100%;
  height: 60px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 36px;
`;

export const NumberInput = styled.input`
  /* border: 1px solid red; */
  width: 64%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  outline: none;
  margin-bottom: 12px;
  padding: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.8rem;
  letter-spacing: -0.02em;
  color: #999999;
`;

export const NumberButton = styled.button`
  width: 240px;
  height: 60px;
  background: #333333;
  border-radius: 8px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 29px;
  /* identical to box height */
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  border: none;
  margin-left: 23.6px;
  cursor: pointer;
`;

export const Authorization = styled.div`
  width: 100%;
  height: 26px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 26px;
  color: #2764ff;
  margin-bottom: 80px;
  margin-top: -15px;
  /* border: 1px solid blue; */
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 60px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  outline: none;
  margin-bottom: 36px;
  padding: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 28px;
  /* identical to box height, or 140% */
  letter-spacing: -0.02em;
  color: #999999;
`;

export const PasswordAuthorization = styled.div`
  width: 100%;
  height: 26px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 26px;
  color: #dc0000;
  margin-bottom: 80px;
  margin-top: -15px;
  /* border: 1px solid blue; */
`;

export const Button = styled.button`
  width: 398px;
  height: 90px;
  background: #333333;
  border-radius: 12px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 41px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  /* margin: 44px auto; */
  margin-top: 44px;
  margin-left: auto;
  margin-right: auto;
`;
