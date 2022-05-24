import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 22rem;
  height: 66.8rem;
  background-color: #333333;
  border-radius: 1.5rem;
  border: none;
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

export const CardBottomWrapper = styled.div`
  width: 100%;
  height: 66.2%;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  background-color: #ffffff;
  padding: 3.9rem 0px 0px 2.2rem;
`;
export const Image = styled.img`
  width: 8rem;
  height: 8rem;
  /* background-color: green; */
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

export const CardBottomContents = styled.div`
  display: flex;
  align-items: center;
  height: 2.32rem;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.3rem;
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
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.02em;
  cursor: pointer;
  :hover {
    font-size: 18px;
  }
`;
