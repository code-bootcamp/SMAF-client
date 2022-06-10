import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 22rem;
  background-color: white;
  border-radius: 1.6rem;
  padding: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  @media ${breakPoints.mobile} {
    width: 32rem;
    padding: 2rem;
    margin: 0rem;
  }
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
`;

export const FileHiddenIcon = styled.img`
  width: 1.4rem;
  height: 0.7rem;
  margin-right: 1rem;
  cursor: pointer;
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
`;

export const ProjectFiles = styled.div``;

export const AddFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.2rem;
  justify-content: flex-start;
  cursor: pointer;
`;

export const ProjectFileAdd = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 3rem;
  background-color: #333333;
  color: white;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.7rem;

  cursor: pointer;
`;

export const FileName = styled.div`
  display: flex;
  align-items: center;

  padding-left: 1rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.3rem;
  letter-spacing: -0.02em;
`;

export const SubmitBtn = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #49496e;
  color: white;
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const SubmitBtnBox = styled.div`
  padding-top: 1rem;
`;
export const FileImg = styled.img`
  width: 1.6rem;
  opacity: 0.5;
  margin-right: 0.5rem;
`;
export const Files = styled.div`
  padding-bottom: 1.2rem;
`;
export const Filename = styled.div`
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const DownImg = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  opacity: 0.3;
`;
