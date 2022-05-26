import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 67%; */
  width: 128rem;
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

export const FileList = styled.div`
  width: 22rem;
  border-radius: 1.5rem;
  padding-left: 2rem;
  background-color: #ffffff;
  margin: 3.2rem 0px 12rem 0px;
  padding-top: 20px;
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

  ::-webkit-scrollbar {
    width: 0rem;
  }

  ::-webkit-scrollbar-thumb {
    height: 0rem;
    background: ${(props: any) => props.color};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f2f2f2;
  }
`;
