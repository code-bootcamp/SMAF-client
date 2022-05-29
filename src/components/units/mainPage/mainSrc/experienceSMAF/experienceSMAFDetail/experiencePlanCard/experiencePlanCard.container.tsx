import ExperiencePlanCardHTML from "./experiencePlanCard.presenter";

export default function ExperiencePlanCard(props: any) {
  return (
    <ExperiencePlanCardHTML
      number={props.number}
      categoryNum={props.categoryNum}
      el={props.el}
    />
  );
}
