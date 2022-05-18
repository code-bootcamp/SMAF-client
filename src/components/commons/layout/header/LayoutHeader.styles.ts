import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 9rem;
  background-color: #333333;

  @media ${breakPoints.mobile} {
    height: 48px;
  }
`;

export const InnerWrap = styled.div`
  width: 192rem;
  display: flex;
  /* border: 1px solid yellow; */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.mobile} {
    width: 90%;
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 4rem;
  /* border: 1px solid yellow; */
`;

export const Icon = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  @media ${breakPoints.mobile} {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const Logo = styled.div`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 36px;
  letter-spacing: 0.05em;
  color: #ffffff;
  padding-left: 10%;
  @media ${breakPoints.mobile} {
    font-size: 1.8rem;
  }
  /* border: 1px solid yellow; */
`;

export const Search = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 36.45%;
  background: #d9d9d9;
  border-radius: 2rem;
  border: none;
  font-size: 2rem;
  padding-left: 13.5%;
  font-weight: 400;
  outline: none;
  /* background-image: url(/image/searchemo.png); */
  /* background-repeat: no-repeat;
  background-size: 1.9rem;
  background-position: 65rem center; */
  ::placeholder {
    padding: 0px 0px 0px 2.2rem;
    background-image: url(/image/searchemo.png);
    background-size: 1.9rem;
    background-repeat: no-repeat;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const OptionWrapper = styled.div`
  /* border: 1px solid yellow; */
  padding-left: 12.36rem;
  /* width: 22rem; */
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    width: 10rem;
    height: 100%;
  }
`;

export const Alarm = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 3.4rem;
  /* margin-right: 14%; */
  /* border: 1px solid yellow; */
  @media ${breakPoints.mobile} {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const Qna = styled.img`
  width: 3.325rem;
  height: 3.325rem;
  /* margin-left: 14%; */
  /* border: 1px solid yellow; */
  margin-right: 2.73rem;
  @media ${breakPoints.mobile} {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const Signup = styled.div`
  /* border: 1px solid yellow; */
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-left: 1.2rem;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

// export const SearchFront = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
// `;

// export const SearchProject = styled.div`
//     font-weight: 400;
//     font-size: 20px;
//     line-height: 36px;
//     letter-spacing: -0.03em;
//     color: #888888;
// `;

// export const SearchEmo = styled.img`
//     width: 19px;
//     height: 19px;
// `;

// export const SearchRight = styled.div``;

// export const SearchLine = styled.img`
//     width: 16px;
//     height: 16px;
// `;
