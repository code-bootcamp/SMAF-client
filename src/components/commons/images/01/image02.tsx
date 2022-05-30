import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const UserPhoto = styled.img`
  width: 3.1rem;
  height: 3.1rem;
  border-radius: 50%;
  border: 3px solid #ffffff;
  @media ${breakPoints.mobile} {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

interface IUserPhoto {
  src: string | undefined;
}

export default function Image02(props: IUserPhoto) {
  return (
    <>
      <UserPhoto src={props.src}></UserPhoto>
    </>
  );
}
