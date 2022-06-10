import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5.6rem;
  /* border: 1px solid blue; */
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

export const ProjectContents = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  justify-content: left;
`;

export const ProjectNameInput = styled.input`
  width: 26.8rem;
  height: 4rem;
  border: 2px solid #dbdbdb;
  border-radius: 0.8rem;
  margin-left: 1.6rem;
  outline: none;
`;

export const ContentsArea = styled.textarea`
  width: 36rem;
  height: 8rem;
  margin-top: 1.2rem;
  border: 2px solid #dbdbdb;
  border-radius: 0.8rem;
  outline: none;
`;

export const EndDate = styled.div`
  padding-bottom: 4.8rem;
  align-items: baseline;
`;

export const Date = styled.input`
  width: 12.6rem;
  height: 4rem;
  background: #ffffff;
  border: 2px solid #dbdbdb;
  border-radius: 0.8rem;
  margin-left: 1.6rem;
  outline: none;
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
  :hover {
    background-color: #6b6bff;
  }
`;
export const Daypick = styled.div`
padding-top: 1rem;
`;