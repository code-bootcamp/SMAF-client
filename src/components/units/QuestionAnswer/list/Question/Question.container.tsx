import * as S from "./Question.styles";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import QuestionAnswerObject from "./QuestionAnswer/QuestionAnswer.container";
import {
  FETCH_QUESTION_COMMENTS,
  CREATE_QUESTION_BOARD_COMMENT,
  FETCH_LOGIN_USER,
} from "./Question.querys";
import { useQuery, useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { indexNum } from "../../../../../commons/store";
import {
  QuestionBoard,
  QuestionComment,
} from "../../../../../commons/types/generated/types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface IQuestionProps {
  el: QuestionBoard;
  index: number;
  dataQuestionBoardsCount: { fetchQuestionBoardsCount: number };
}

export default function QuestionObject(props: IQuestionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAnswer, setIsOpenAnswer] = useState(false);
  const [createQuestionComment] = useMutation(CREATE_QUESTION_BOARD_COMMENT);
  const { data: userData } = useQuery(FETCH_LOGIN_USER);

  const { data } = useQuery(FETCH_QUESTION_COMMENTS, {
    variables: {
      questionBoardId: String(props.el.questionBoardId),
    },
  });
  const { handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const CreateNewQuestionComment = async (data: QuestionComment) => {
    await createQuestionComment({
      variables: {
        contents: data.contents,
        questionboardId: props.el.questionBoardId,
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
  const [index] = useRecoilState(indexNum);
  return (
    <>
      <S.Table>
        <S.BasicRow>
          <S.TableMenuNo>
            {props.dataQuestionBoardsCount?.fetchQuestionBoardsCount -
              (props.index + index + 1) +
              1}
          </S.TableMenuNo>
          <S.TableMenuTypes>{props.el.questionCategory}</S.TableMenuTypes>
          <S.TableMenuTitles onClick={onContents}>
            {props.el.title}
          </S.TableMenuTitles>
          <S.TableMenuWriter>{props.el.user.userName}</S.TableMenuWriter>
          <S.TableMenuDate>{props.el.createAt.slice(0, 10)}</S.TableMenuDate>
          {userData?.fetchLoginUser.admin ? (
            <S.QusStionAnswerBtn onClick={onAnswerWrite}>
              {isOpenAnswer ? "작성취소" : "답글달기"}
            </S.QusStionAnswerBtn>
          ) : (
            <div></div>
          )}
        </S.BasicRow>
        {isOpen && <S.Question>{props.el.contents}</S.Question>}
        <form
          onSubmit={handleSubmit(
            CreateNewQuestionComment as unknown as () => void
          )}
        >
          {isOpenAnswer && (
            <S.AnswerWriteArea>
              <ReactQuill
                onChange={onChangeContents}
                style={{ height: "11rem", width: "65rem" }}
              />
              <S.AnswerSubmitBtn>등록하기</S.AnswerSubmitBtn>
            </S.AnswerWriteArea>
          )}
        </form>
        {data?.fetchQuestionComments.map((el: QuestionComment) => (
          <QuestionAnswerObject key={uuidv4()} el={el} />
        ))}
      </S.Table>
    </>
  );
}
