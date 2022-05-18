import styled from "@emotion/styled";

// 그림자
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
  width: 480px;
  height: 360px;
  /* border-radius: 12px; */
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: none;
  background: white;
  z-index: 11;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 78px 96px;
  /* animation: modalOpen 1s ease-in-out; */
  /* @keyframes modalOpen {
    0% {
      opacity: 0;
      transform: translateY(60px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  } */
`;

export const Logo = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  /* identical to box height */
  text-align: center;
  margin-bottom: 15px;
`;

export const ModalText = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.02em;
  /* border: 1px solid red; */
`;

export const ConfirmBtn = styled.button`
  all: unset;
  width: 288px;
  height: 44px;
  margin-top: 58px;
  background-color: #333333;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  color: white;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.02em;
  cursor: pointer;
`;
