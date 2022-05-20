import * as S from "./Question.styles";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faReply } from "@fortawesome/free-solid-svg-icons";
import QuestionAnswerObject from "./QuestionAnswer/QuestionAnswer.container";
import {
  FETCH_QUESTION_COMMENTS,
  CREATE_QUESTION_BOARD_COMMENT,
  FETCH_LOGIN_USER,
} from "./Question.querys";
import { useQuery, useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface IQuestionProps {
  el: any;
  no: number;
}

export default function QuestionObject(props: IQuestionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAnswer, setIsOpenAnswer] = useState(false);
  const [createQuestionComment] = useMutation(CREATE_QUESTION_BOARD_COMMENT);
  const { data: userData } = useQuery(FETCH_LOGIN_USER);
  console.log(userData);
  const { data } = useQuery(FETCH_QUESTION_COMMENTS, {
    variables: {
      questionBoardId: String(props.el.questionBoardId),
    },
  });
  const { handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const CreateNewQuestionComment = async (data: any) => {
    await createQuestionComment({
      variables: {
        contents: data.contents,
        questionboardId: props.el.questionBoardId,
        userId: String(userData?.fetchLoginUser?.userId),
      },
      refetchQueries: [
        {
          query: FETCH_QUESTION_COMMENTS,
          variables: {
            questionBoardId: String(props.el.questionBoardId),
          },
        },
      ],
    });
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  const onContents = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const onAnswerWrite = () => {
    if (isOpenAnswer === false) {
      setIsOpenAnswer(true);
    } else {
      setIsOpenAnswer(false);
    }
  };
  console.log(userData?.fetchLoginUser?.admin);
  return (
    <>
      <S.Table>
        <S.BasicRow>
          <S.TableMenuNo>{props.no}</S.TableMenuNo>
          <S.TableMenuTypes>{props.el.questionCategory}</S.TableMenuTypes>
          <S.TableMenuTitles onClick={onContents}>
            {props.el.title}
          </S.TableMenuTitles>
          <S.TableMenuWriter>작성자</S.TableMenuWriter>
          <S.TableMenuDate>작성일</S.TableMenuDate>
          {/* {data?.fetchQuestionComments[0] &&
          !userData?.fetchLoginUser?.admin ? (
            <S.QusStionAnswerBtn>답변완료</S.QusStionAnswerBtn>
          ) : (
            <div></div>
          )}
          {userData?.fetchLoginUser?.admin && (
            <S.QusStionAnswerBtn onClick={onAnswerWrite}>
              {isOpenAnswer ? "작성취소" : "답글달기"}
            </S.QusStionAnswerBtn>
          )} */}

          <S.QusStionAnswerBtn onClick={onAnswerWrite}>
            {isOpenAnswer ? "작성취소" : "답글달기"}
          </S.QusStionAnswerBtn>
        </S.BasicRow>
        {isOpen && <S.Question>{props.el.contents}</S.Question>}
        <form onSubmit={handleSubmit(CreateNewQuestionComment)}>
          {isOpenAnswer && (
            <S.AnswerWriteArea>
              <ReactQuill
                onChange={onChangeContents}
                style={{ height: "11rem", width: "65rem" }}
                // value={props.getValues("contents" || "")}
              />
              <S.AnswerSubmitBtn>등록하기</S.AnswerSubmitBtn>
            </S.AnswerWriteArea>
          )}
        </form>
        {data?.fetchQuestionComments.map((el: any) => (
          <QuestionAnswerObject key={uuidv4()} el={el} />
        ))}
      </S.Table>
    </>
  );
}
