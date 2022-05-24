import { useLazyQuery, useMutation } from "@apollo/client";
import {
  FETCH_PARTCIPATING_USER,
  CREATE_PARTICIPANT,
  FETCH_PARTCIPATING_USER_EMAIL,
  SEND_EMAIL,
} from "./addMemberModal.querys";
import * as S from "./addMemberModal.styles";
// import AddMemberModalHTML from "./addMemberModal.presenter";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { AddMemberModalProps } from "./addMemberModal.types";

export default function AddMemberModal(props: AddMemberModalProps) {
  const [email, setEmail] = useState("");
  //   const [emailError, setEmailError] = useState("");
  const [createParticipant] = useMutation(CREATE_PARTICIPANT);
  const [sendEmail] = useMutation(SEND_EMAIL);
  const router = useRouter();
  const [getUserInfo, { data }] = useLazyQuery(FETCH_PARTCIPATING_USER_EMAIL, {
    variables: {
      email,
    },
  });

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail((event.target as any).value);
  };

  const OnClickAddUser = async () => {
    try {
      await sendEmail({
        variables: {
          email: [String(data?.fetchUserEmail.email)],
        },
      });
    } catch (error) {
      alert(error);
    }
    try {
      await createParticipant({
        variables: {
          email: data?.fetchUserEmail.email,
          projectId: router.query.projectId,
        },
        refetchQueries: [
          {
            query: FETCH_PARTCIPATING_USER,
            variables: {
              projectId: router.query.projectId,
            },
          },
        ],
      });
    } catch (error) {
      alert(error);
    }
    props.onToggleModal();
  };

  return (
    // <AddMemberModalHTML SearchUser={SearchUser} aaa={[getUserInfo, { data }]} />
    <>
      <S.Wrapper>
        <S.SearchInput
          placeholder="E-mail을 입력해주세요"
          onChange={onChangeEmail}
        ></S.SearchInput>
        {/* <div>{emailError}</div> */}
        <button onClick={() => getUserInfo()}>Search</button>
        {data?.fetchUserEmail ? (
          <>
            <div>{data?.fetchUserEmail.userName}</div>
            <div>{data?.fetchUserEmail.email}</div>
            <img src={data?.fetchUserEmail.userImageURL}></img>
            <button onClick={OnClickAddUser}>초대하기</button>
          </>
        ) : (
          <></>
        )}
      </S.Wrapper>
    </>
  );
}
