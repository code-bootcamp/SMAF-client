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
import { v4 as uuidv4 } from "uuid";

export default function AddMemberModal(props: AddMemberModalProps) {
  const [email, setEmail] = useState("");
  //   const [emailError, setEmailError] = useState("");
  const [createParticipant] = useMutation(CREATE_PARTICIPANT);
  const [sendEmail] = useMutation(SEND_EMAIL);
  const router = useRouter();
  const [getUserInfo, { data }] = useLazyQuery(FETCH_PARTCIPATING_USER_EMAIL, {
    variables: {
      userOremail: email,
    },
  });

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setEmail((event.target as any).value);

      if (event.target.value === "") {
        setEmail(uuidv4());
      }
    }, 1000);
  };

  const OnClickAddUser = async (event: any) => {
    const useEmail: any = [];
    data?.fetchUserEmail.forEach((el: any) => {
      if (
        el.userName.includes(email) ||
        (el.email.includes(email) && el.email === event.target.id)
      ) {
        useEmail.push(el);
      }
    });
    try {
      await sendEmail({
        variables: {
          email: useEmail?.[0].email,
        },
      });
    } catch (error) {
      alert(error);
    }
    try {
      await createParticipant({
        variables: {
          email: useEmail?.[0].email,
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
        <button onClick={() => getUserInfo()}>검색시작</button>
        {data?.fetchUserEmail.map((el: any) => (
          <>
            <div>{el.userName}</div>
            <div>{el.email}</div>
            <img src={el.userImageURL}></img>
            <button id={el.email} onClick={OnClickAddUser}>
              초대하기
            </button>
          </>
        ))}
      </S.Wrapper>
    </>
  );
}
