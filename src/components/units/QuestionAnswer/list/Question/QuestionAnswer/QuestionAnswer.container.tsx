import QuestionAnswerObjectHTML from "./QuestionAnswer.presenter";
import { QuestionAnswerObjectProps } from "./QuestionAnswer.types";
export default function QuestionAnswerObject(props: QuestionAnswerObjectProps) {
  return <QuestionAnswerObjectHTML el={props.el} />;
}
