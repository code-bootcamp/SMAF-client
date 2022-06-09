import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  min-height: 100%;
  min-width: 100%;
  z-index: 10;
  position: fixed;
  left: 0%;
  top: 0%;
  opacity: 0.6;
  background: black;
`;

export const Close = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
  font-size: 20px;
`;

export const PointModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 480px;
  height: 360px;
  padding: 45px 96px;
  background: white;
  transform: translate(-50%, -50%);
  opacity: none;
  z-index: 11;
`;

export const Logo = styled.img`
  width: 7rem;
  height: 7rem;
  margin-bottom: 4rem;
`;

export const ModalText = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.02em;
`;

export const ConfirmBtn = styled.button`
  all: unset;
  width: 288px;
  height: 44px;
  margin-top: 58px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  background-color: #333333;
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.02em;
  cursor: pointer;
`;
