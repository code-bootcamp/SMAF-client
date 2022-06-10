import { SettingFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Setting = styled(SettingFilled)`
  width: 3.2rem;
  height: 3.2rem;
  color: ${(props: any) => props.color};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5.6rem;
`;

export const Word = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  letter-spacing: -2%;
`;
export const ProjectName = styled.div`
  display: flex;
  align-items: baseline;
  padding-bottom: 3rem;
  padding-top: 6.2rem;
`;
export const Basic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5rem;
`;

export const ProjectContents = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  justify-content: left;
`;

export const ProjectNameInput = styled.input`
  width: 26.8rem;
  height: 4rem;
  border: 1px solid #ededed;
  border-radius: 0.8rem;
  margin-left: 1.6rem;
`;

export const ContentsArea = styled.textarea`
  width: 36rem;
  height: 8rem;
  border: 1px solid #ededed;
  border-radius: 0.8rem;
`;

export const EndDate = styled.div`
  display: flex;
  padding-bottom: 4.8rem;
  align-items: baseline;
`;

export const Date = styled.input`
  width: 12.6rem;
  height: 4rem;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 0.8rem;
  margin-left: 1.6rem;
`;
export const ConfirmBtn = styled.button`
  all: unset;
  width: 36rem;
  height: 4.8rem;
  background-color: #333333;
  border: 1px solid #dbdbdb;
  border-radius: 0.8rem;
  color: white;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.3rem;
  text-align: center;
  letter-spacing: -0.02em;
  cursor: pointer;
`;
