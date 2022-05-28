import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 22rem;
  height: 66.8rem;
  border: none;
  border-radius: 1.5rem;
  background-color: #333333;
`;

export const BasicLow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 33.8%;
  padding-top: 4rem;
`;

export const Image = styled.img`
  width: 8rem;
  height: 8rem;
  border: 2px solid white;
  border-radius: 50%;
`;

export const Name = styled.div`
  height: 2.9rem;
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  padding-top: 1.5rem;
`;

export const Email = styled.div`
  height: 20px;
  color: #999999;
  font-size: 1.4rem;
  font-weight: 400;
  padding-top: 15px;
`;

export const CardBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 66.2%;
  padding: 3.5rem 0rem 0rem 2.2rem;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  background-color: #ffffff;
`;

export const Line = styled.div`
  width: 18rem;
  height: 0.1rem;
  margin-bottom: 2.4rem;
  margin-top: 1.5rem;
  background-color: #ededed;
`;

export const CardBottomContents = styled.div`
  display: flex;
  align-items: center;
  width: 17.3rem;
  height: 2.32rem;
  margin-bottom: 1.3rem;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const CardBottomContents03 = styled.div`
  display: flex;
  align-items: center;
  height: 2.32rem;
  margin-bottom: 1.3rem;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const Icon = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  margin-right: 1rem;
`;
export const Icon2 = styled.img`
  width: 2.2rem;
  height: 2rem;
  margin-right: 1rem;
`;
export const Title = styled.div`
  font-size: 1.6rem;
  line-height: 23px;
  letter-spacing: -0.02em;
  cursor: pointer;
  :hover {
    font-size: 1.7rem;
  }
`;
