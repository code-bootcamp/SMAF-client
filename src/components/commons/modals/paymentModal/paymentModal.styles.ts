import styled from "@emotion/styled";
import { Modal } from "antd";

export const ModalWrapper = styled(Modal)`
  width: 28rem;
  height: 40rem;
`;

export const Title = styled.h1`
  width: 174px;
  height: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 28px;
`;

export const CouponWrapper = styled.div`
  width: 204px;
  height: 68px;

  background: #f1f1f5;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 196px;
    height: 60px;
    border: 1px solid #ffffff;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 20px;
    height: 18px;
  }
  span {
    width: 118px;
    height: 20px;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.02em;
    margin-left: 20px;
  }
`;

export const SubTitle = styled.p`
  width: 217px;
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin-top: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 216px;
  justify-content: space-between;
  margin-top: 28px;

  button {
    width: 104px;
    height: 40px;
    cursor: pointer;
    background: #333333;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;
    border: none;
    outline: none;

    :hover {
      background: #dbdbdb;
      border: none;
    }
  }
`;
