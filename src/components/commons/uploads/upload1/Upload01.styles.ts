import styled from "@emotion/styled";

export const UploadImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;

export const UploadButton = styled.div`
  width: 120px;
  height: 120px;
  background-image: url(/image/human.png);
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  border: none;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  cursor: pointer;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
