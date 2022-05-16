import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* padding: 0px 100px 0 100px; */
`;

export const Container = styled.div`
  width: 31rem;
  height: 24rem;
  /* border: 1px solid red; */
  border-radius: 1.6rem 1.6rem 1.6rem 1.6rem;
  cursor: pointer;
  overflow: hidden;
`;

export const ImgBox = styled.img`
  /* border: 2px solid red; */
  width: 31rem;
  height: 16rem;
  border-radius: 1.6rem 1.6rem 0rem 0rem;
  transition: all 0.2s linear;

  :hover {
    overflow: hidden;
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`;

export const TextBox = styled.div`
  width: 31rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0rem 0rem 1.6rem 1.6rem;
  padding: 1.4rem 8.7rem 1.9rem 2rem;
`;

export const Title = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.6rem;
  /* border: 1px solid red; */
`;
export const SubTitle = styled.div`
  /* width: 200px; */
  /* height: 20px; */
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #767676;
  /* border: 1px solid red; */
`;
