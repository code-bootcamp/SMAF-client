import QuestionAnswerObjectHTML from "./QuestionAnswer.presenter";
// import { useQuery } from "@apollo/client";
// import { FETCH_QUESTION_COMMENTS } from "./QuestionAnswer.querys";
export default function QuestionAnswerObject(props: any) {
  //   console.log(props.questionId, "sdafasdf");
  //   const { data } = useQuery(FETCH_QUESTION_COMMENTS, {
  //     variables: {
  //       questionBoardId: String(props.questionId),
  //     },
  //   });

  //   console.log(data, "data");
  console.log(props.el, "elelele");
  return <QuestionAnswerObjectHTML el={props.el} />;
}
