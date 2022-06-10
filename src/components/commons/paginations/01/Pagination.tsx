import * as S from "./pagination.style";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { indexNum } from "../../../../commons/store";
import { ApolloQueryResult } from "@apollo/client";
import { QuestionBoard } from "../../../../commons/types/generated/types";

interface IPropsPagination {
  refetch: (
    variables?:
      | Partial<{
          page: number;
        }>
      | undefined
  ) => Promise<ApolloQueryResult<any>>;
  lastPage: number;
  data?: {
    fetchQuestionBoards: QuestionBoard[];
  };
}

export default function Pagination(props: IPropsPagination) {
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState<any>();
  const [idNum, setIdNum] = useState(0);
  const [, setIndex] = useRecoilState(indexNum);

  useEffect(() => {
    setCurrent(1);
    setIdNum(1);
  }, []);

  const onClickPage = (event: any) => {
    props.refetch({ page: Number(event.target.id) });
    setCurrent(Number(event.target.id));
    setIdNum(event.target.id);
  };
  setIndex(5 * (idNum - 1));

  const onClickPrevPage = () => {
    if (startPage === 1) {
      return;
    }
    setStartPage((prev) => prev - 5);
    props.refetch({ page: startPage - 5 });
    setCurrent(Number(startPage - 5));
  };

  const onClickNextPage = () => {
    if (startPage + 10 > props.lastPage) return;
    setStartPage((prev) => prev + 5);
    props.refetch({ page: startPage + 5 });
    setCurrent(Number(startPage + 5));
  };

  return (
    <S.Wrapper>
      <S.Pre
        onClick={onClickPrevPage}
        style={{ color: startPage === 1 ? "lightgray" : "black" }}
      >
        ◀
      </S.Pre>
      {new Array(5).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <S.PageNum
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
              style={{
                color: current === startPage + index ? "#111111" : "#999999",
                fontWeight: current === startPage + index ? "700" : "400",
              }}
            >
              {startPage + index}
            </S.PageNum>
          )
      )}
      <S.Next
        onClick={onClickNextPage}
        style={{
          color: startPage + 5 > props.lastPage ? "lightgray" : "black",
        }}
      >
        ▶
      </S.Next>
    </S.Wrapper>
  );
}
