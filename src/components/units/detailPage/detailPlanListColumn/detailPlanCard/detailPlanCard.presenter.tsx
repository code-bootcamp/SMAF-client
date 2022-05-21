import * as S from "./detailPlanCard.styles";
interface DetailPlanCardHTMLProps {
  el: any;
}
export default function DetailPlanCardHTML(props: DetailPlanCardHTMLProps) {
  // console.log(props.el);
  return (
    <S.Wrapper>
      <S.Title>{props.el.scheduleName}</S.Title>
      <S.Contents>Contents</S.Contents>
      <S.Date>{props.el.scheduleDate.slice(0, 10)}</S.Date>
    </S.Wrapper>
  );
}
