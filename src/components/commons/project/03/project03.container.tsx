import { ProjectParticipant } from "../../../../commons/types/generated/types";
import * as S from "./project03.styles";

interface IUserProject {
  el?: ProjectParticipant;
}

export default function Project03(props: IUserProject) {
  return (
    <S.card>
      <S.Title>프로젝트가 없습니다</S.Title>
    </S.card>
  );
}
