import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const UploadImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    /* margin-top: 3.2rem; */
    width: 64px;
    height: 64px;
  }
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
  /* margin-right: 24px; */
  outline: none;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    /* margin-top: 3.2rem; */
    width: 64px;
    height: 64px;
    background-size: 25px;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
