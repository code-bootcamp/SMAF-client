import * as S from "./image01.styles";


interface IMembersProps{
meberImageSrc: string | undefined;
}




export default function ImageCircleUI(props:IMembersProps) {
  return (
    <S.ImageBox>
      <S.One src={props.meberImageSrc}></S.One>
      <S.Two src={props.meberImageSrc}></S.Two>
      <S.Three src={props.meberImageSrc}></S.Three>
      <S.Four src={props.meberImageSrc}></S.Four>
      <S.Five src={props.meberImageSrc}></S.Five>
    </S.ImageBox>
  );
}
