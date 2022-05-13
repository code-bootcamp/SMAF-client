import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 67%; */
  width: 1280px;
  border: 1px solid black;
  padding-top: 60px;
`;

export const BasicLow = styled.div`
  display: flex;
`;

export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  margin-right: 70px;
`;

export const ProjectDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  background-color: #ffffff;
  border-radius: 15px;
  margin-bottom: 32px;
`;

export const DetailImg = styled.img`
  width: 220px;
  height: 140px;
  object-fit: cover;
  padding-bottom: 23px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const DetailProjectName = styled.div`
  width: 220px;
  padding: 0px 20px 0px 20px;
  font-size: 16px;
  font-weight: 700;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  line-height: 26px;
  padding-bottom: 13px;
`;

export const DetailProjectContents = styled.div`
  width: 220px;
  font-size: 14px;
  font-weight: 400;
  padding: 0px 31px 32px 20px;
`;

export const DetailProjectDay = styled.div`
  width: 220px;
  color: #767676;
  font-size: 14px;
  font-weight: 400;
  padding: 0px 31px 11px 20px;
`;

export const DetailProjectPosition = styled.div`
  width: 220px;
  color: #767676;
  font-size: 14px;
  font-weight: 400;
  padding: 0px 31px 27px 20px;
`;

export const DetailProjectIcon = styled.img`
  width: 13.3px;
  height: 16.6px;
  margin-right: 5px;
`;

export const FileList = styled.div`
  width: 220px;
  border-radius: 15px;
  padding-left: 20px;
  background-color: #ffffff;
  margin: 32px 0px 120px 0px;
  padding-top: 20px;
`;

export const FileListName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 34.75px;
  padding-bottom: 24px;
  padding-right: 25px;
`;

export const FileHiddenIcon = styled.img`
  width: 14px;
  height: 7px;
  cursor: pointer;
`;

export const FileListUpload = styled.div`
  display: flex;
  padding: 0px 20px 17px 0px;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FileListContents = styled.div`
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FileListUploadIcon = styled.img`
  width: 16px;
  height: 20px;
  margin-right: 12px;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
