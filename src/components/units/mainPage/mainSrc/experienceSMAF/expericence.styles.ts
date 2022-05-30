import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

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
  width: 100rem;
  height: 82.4rem;
  /* border: 10px solid white; */
  /* background-color: #ededed; */
  
  padding: 2rem;
  overflow: scroll;
  /* border-radius: 1.6rem; */
  ::-webkit-scrollbar {
    width: 0rem;
    height: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    height: 0rem;
    background: #bebebe;
    /* border-radius: 1.6rem; */
  }

  ::-webkit-scrollbar-track {
    background: white;
    border-radius: 2rem;
  }
  @media ${breakPoints.mobile} {
    width: 32rem;
    display: flex;
    flex-direction: column;
  }
`;

export const AddcolumnBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 700;
  min-width: 16rem;
  height: 4rem;
  border-radius: 1.6rem;
  background-color: #ffffff;
  padding: 0px 2rem;
`;

export const AddCoulumnIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 67%; */
  width: 148rem;
  padding-top: 6rem;
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
`;

export const DetailImg = styled.img`
  width: 22rem;
  height: 14rem;
  object-fit: cover;
  padding-bottom: 2.3rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
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
`;

export const DetailProjectContents = styled.div`
  width: 22rem;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0px 3.1rem 3.2rem 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DetailProjectDay = styled.div`
  width: 22rem;
  color: #767676;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0px 3.1rem 1.1rem 2rem;
`;

export const DetailProjectPosition = styled.div`
  width: 22rem;
  color: #767676;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0px 3.1rem 2.7rem 2rem;
`;

export const DetailProjectIcon = styled.img`
  width: 1.33rem;
  height: 1.66rem;
  margin-right: 0.5rem;
`;

export const BtnList = styled.div`
  display: none;
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
  width: 22rem;
  background-color: white;
  border-radius: 1.6rem;
  padding: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const MemberList = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  background-color: white;
  border-radius: 1.6rem;
  padding: 1.5rem;
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
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;
export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 2.4rem;
  font-weight: 500;
`;

export const FileImg = styled.img`
  width: 1.6rem;
  opacity: 0.5;
  margin-right: 0.5rem;
`;
export const Files = styled.div`
  padding-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
`;
export const Filename = styled.div`
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 1rem 0rem;
`;
export const DownImg = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  opacity: 0.3;
`;
export const Team = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0 0.7rem 0;
`;
export const Member = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
`;
export const TeamPerson = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 3rem;
`;
export const Name = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.3rem;
  letter-spacing: -0.02em;
`;
