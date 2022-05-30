import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Container = styled.div`
  width: 88rem;
  height: 66.4rem;
  @media ${breakPoints.mobile} {
    width: 36rem;
    height: 55rem;
    background-color: white;
    /* border-top-left-radius: 16rem;
    border-top-right-radius: 16rem; */
    padding-top: 3rem;
  }
`;
export const Wrapper = styled.div`
  width: 88rem;
  height: 66.4rem;
  background-color: white;
  border-radius: 1.6rem;
  padding: 1.5rem;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 2rem;
    height: 0rem;
  }
  ::-webkit-scrollbar-thumb {
    height: 0rem;
    background: skyblue;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background: white;
    border-radius: 1.6rem;
  }
  @media ${breakPoints.mobile} {
    width: 36rem;
    height: 48rem;
    padding: 0rem;
    padding-left: 1rem;
    padding-top: 20px;
    border-radius: 0rem;
  }
`;
export const DateBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
`;
export const Date = styled.span`
  font-size: 3.2rem;
  font-weight: 700;
  @media ${breakPoints.mobile} {
    font-size: 1.6rem;
    margin-left: 20px;
    cursor: pointer;
  }
`;
export const DateInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    background-color: white;
  }
`;
export const Direction = styled.span`
  margin-left: 100px;
`;
export const DirectionBtn = styled.button`
  border: none;
  background-color: none;
  margin-left: 2rem;
`;
export const LDirectionBtn = styled.button`
  border: none;
  background-color: #ffffff;
  margin-left: 2rem;
`;
export const RDirectionBtn = styled.button`
  border: none;
  background-color: #ffffff;
  margin-left: 20px;
`;
export const AddBtn = styled.button`
  background: #333333;
  border: none;
  border-radius: 1.2rem;
  width: 15.1rem;
  height: 5rem;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  :hover {
    background: #6b6bff;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Nodata = styled.div`
  position: absolute;
  top: 30rem;
  font-size: 1.8rem;
`;
export const NoSchedule = styled.img`
  width: 35rem;
`;
export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  position: relative;
`;
