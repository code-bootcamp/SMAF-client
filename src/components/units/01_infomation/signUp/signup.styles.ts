import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 88rem;
  margin-bottom: 16rem;
  @media ${breakPoints.mobile} {
    margin-bottom: 6rem;
  }
`;

export const SignUpContents = styled.div`
  width: 100%;
  @media ${breakPoints.mobile} {
    width: 32rem;
  }
`;

export const SignupForm = styled.form``;

export const SignUpTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
  }
`;

export const SignUpTitle = styled.div`
  padding-top: 20%;
  padding-bottom: 9rem;
  font-size: 3.2rem;
  font-weight: 700;
  @media ${breakPoints.mobile} {
    padding-top: 32px;
    padding-bottom: 28px;
    font-size: 18px;
  }
`;

export const SignUpProfileWrapper = styled.div`
  /* width: 12rem;
  height: 12rem;
  border-radius: 100%;
  border-color: black; */
`;

export const SignUpInfo = styled.div``;

export const FormLabel = styled.div`
  padding-top: 8rem;
  padding-bottom: 2rem;
  font-weight: 600;
  font-size: 2.8rem;
  @media ${breakPoints.mobile} {
    padding-top: 24px;
    padding-bottom: 16px;
    font-size: 18px;
  }
`;

export const NameInput = styled.input`
  width: 45%;
  height: 6rem;
  padding-left: 3%;
  border: 0.2rem solid #dbdbdb;
  border-radius: 0.8rem;
  font-size: 2rem;
  outline: none;
  @media ${breakPoints.mobile} {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    width: 100%;
    height: 48px;
  }
`;

export const SignupInput = styled.input`
  width: 100%;
  height: 6rem;
  padding-left: 3%;
  border: 0.2rem solid #dbdbdb;
  border-radius: 0.8rem;
  background-color: #ffffff;
  font-size: 2rem;
  font-weight: 600;
  outline: none;
  @media ${breakPoints.mobile} {
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    width: 100%;
    height: 48px;
  }
`;

export const PasswordInput1 = styled.input`
  width: 100%;
  height: 6rem;
  padding-left: 3%;
  margin-bottom: 2rem;
  border: 2px solid #dbdbdb;
  border-radius: 0.8rem;
  background-color: #ffffff;
  font-weight: 600;
  font-size: 2rem;
  outline: none;
  @media ${breakPoints.mobile} {
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    width: 100%;
    height: 48px;
  }
`;

export const PasswordInput2 = styled.input`
  width: 100%;
  height: 6rem;
  padding-left: 3%;
  border: 2px solid #dbdbdb;
  border-radius: 0.8rem;
  background-color: #ffffff;
  font-weight: 600;
  font-size: 2rem;
  outline: none;
  @media ${breakPoints.mobile} {
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    width: 100%;
    height: 48px;
  }
`;

export const SignupPhone = styled.div``;

export const SignUpcertification = styled.div``;

export const SignNumberSend = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignNumberReceive = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.6rem;
`;

export const SignUpPhoneInput = styled.input`
  width: 67%;
  height: 6rem;
  padding-left: 3%;
  border: 0.2rem solid #dbdbdb;
  border-radius: 0.8rem;
  background-color: #ffffff;
  font-size: 2rem;
  font-weight: 600;
  outline: none;
  @media ${breakPoints.mobile} {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    width: 100%;
    height: 40px;
  }
`;

export const SignUpPhoneSendButton = styled.button`
  width: 28%;
  height: 6rem;
  border-radius: 0.8rem;
  background-color: #333333;
  color: #ffffff;
  font-size: 2rem;
  font-weight: 800;
  cursor: pointer;
  border: none;
  :hover {
    background-color: #6b6bff;
  }
  @media ${breakPoints.mobile} {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    width: 150px;
    height: 40px;
    margin-left: 12px;
  }
`;

export const SignAboutMe = styled.div`
  height: 20%;
`;

export const SignAboutInput = styled.textarea`
  width: 100%;
  height: 36rem;
  padding: 1.6rem 0 0 2rem;
  border: 0.2rem solid #dbdbdb;
  border-radius: 0.8rem;
  background-color: #ffffff;
  font-size: 2rem;
  font-weight: 400;
  outline: none;
  @media ${breakPoints.mobile} {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    width: 100%;
    height: 120px;
  }
`;

export const SignButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SignSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 9rem;
  margin-top: 23.6rem;
  border-radius: 0.8rem;
  background-color: #333333;
  color: #ffffff;
  font-size: 2.8rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  :hover {
    background-color: #6b6bff;
  }
  @media ${breakPoints.mobile} {
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    width: 100%;
    height: 48px;
    margin-top: 6rem;
  }
`;

export const ErrorMsg = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.6rem;
  color: #dc0000;
  @media ${breakPoints.mobile} {
    color: #dc0000;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
  }
`;

export const ErrorphoneMsg = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.6rem;
  color: #dc0000;
  margin-top: 3rem;
  @media ${breakPoints.mobile} {
    color: #dc0000;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
  }
`;
