import * as S from "./project06.styles";

interface IUserProject {
  el?: any;
}

export default function Project06(props: IUserProject) {
  return (
    <S.card>
      <S.Title>프로젝트가 없습니다</S.Title>
    </S.card>
  );
}
