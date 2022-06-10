import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

interface btnStyles1 {
  isOpenProject: boolean;
}

interface btnStyles2 {
  isOpenMember: boolean;
}

interface btnStyles3 {
  isOpenFile: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 67%; */
  width: 148rem;
  padding-top: 6rem;
  @media ${breakPoints.mobile} {
    padding-top: 0rem;
    width: 100%;
    flex-direction: column;
  }
`;

export const BasicLow = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  margin-right: 7rem;
`;

export const ProjectDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  background-color: #ffffff;
  border-radius: 1.5rem;
  margin-bottom: 3.2rem;
  @media ${breakPoints.mobile} {
    width: 36rem;
    border-radius: 0rem;
  }
`;

export const DetailImg = styled.img`
  width: 22rem;
  height: 14rem;
  object-fit: cover;
  padding-bottom: 2.3rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 18rem;
    border-top-left-radius: 0rem;
    border-top-right-radius: 0rem;
  }
`;

export const DetailProjectName = styled.div`
  width: 22rem;
  padding: 0px 2rem 0px 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.6rem;
  padding-bottom: 1.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const DetailProjectContents = styled.div`
  width: 22rem;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0px 3.1rem 3.2rem 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const DetailProjectDay = styled.div`
  width: 22rem;
  color: #767676;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0px 3.1rem 1.1rem 2rem;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const DetailProjectPosition = styled.div`
  width: 22rem;
  color: #767676;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0px 3.1rem 2.7rem 2rem;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const DetailProjectIcon = styled.img`
  width: 1.33rem;
  height: 1.66rem;
  margin-right: 0.5rem;
`;

export const BtnList = styled.div`
  display: none;
  @media ${breakPoints.mobile} {
    display: flex;
  }
`;

export const ShowBtn1 = styled.button`
  width: 12rem;
  height: 4.8rem;
  border: none;
  background-color: white;
  color: #767676;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-bottom: ${(props: btnStyles1) =>
    props.isOpenProject ? "2px solid black" : "none"};
  cursor: pointer;
  :hover {
    color: black;
    border-bottom: 2xp solid black;
  }
`;

export const ShowBtn2 = styled.button`
  width: 12rem;
  height: 4.8rem;
  border: none;
  background-color: white;
  color: #767676;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-bottom: ${(props: btnStyles2) =>
    props.isOpenMember ? "2px solid black" : "none"};
  cursor: pointer;
  :hover {
    color: black;
  }
`;

export const ShowBtn3 = styled.button`
  width: 12rem;
  height: 4.8rem;
  border: none;
  background-color: white;
  color: #767676;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-bottom: ${(props: btnStyles3) =>
    props.isOpenFile ? "2px solid black" : "none"};
  cursor: pointer;
  :hover {
    color: black;
    border-bottom: 2xp solid black;
  }
`;

export const FileList = styled.div`
  display: flex;
  @media ${breakPoints.mobile} {
    width: 32rem;
    display: ${(props: btnStyles3) => (props.isOpenFile ? "flex" : "none")};
    margin: 3.2rem 2rem 12rem 2rem;
  }
`;

export const MemberList = styled.div`
  display: flex;
  @media ${breakPoints.mobile} {
    width: 100%;
    display: ${(props: btnStyles2) => (props.isOpenMember ? "flex" : "none")};
    padding: 2rem;
  }
`;

export const FileListName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 3.475rem;
  padding-bottom: 2.4rem;
  padding-right: 2.5rem;
`;

export const FileHiddenIcon = styled.img`
  width: 1.4rem;
  height: 0.7rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const FileListUpload = styled.div`
  display: flex;
  padding: 0px 2rem 1.7rem 0px;
  font-size: 1.6rem;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FileListContents = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FileListUploadIcon = styled.img`
  width: 1.6rem;
  height: 2rem;
  margin-right: 1.2rem;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  overflow-y: auto;
  margin: 1.5rem 0rem;
  /* transform: rotateX(180deg);
    -ms-transform: rotateX(180deg);
    -webkit-transform: rotateX(180deg); */

  ::-webkit-scrollbar {
    width: 0rem;
    height: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    height: 0rem;
    background: ${(props: any) => props.color};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #ededed;
  }
  @media ${breakPoints.mobile} {
    display: ${(props: btnStyles1) => (props.isOpenProject ? "flex" : "none")};
    padding-left: 2rem;
  }
`;
