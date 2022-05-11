import * as S from "./header.styles";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { gql, useQuery, useMutation } from "@apollo/client";
import { accessTokenState } from "../../store/index";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";
import Payment from "../../../units/market/payMent/payMent.container";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [accessToken] = useRecoilState(accessTokenState);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onToggleModal = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  const logoutUserName = async () => {
    try {
      const result = await logoutUser({});
      console.log(result, "로그아웃결과");
      location.reload();
      router.push("/market");
    } catch (error) {
      alert("logoutFailed");
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.BasicRow>
          <S.HomeBtn onClick={onClickMoveToPage("/")}>Home</S.HomeBtn>
          <S.HomeBtn onClick={onClickMoveToPage("/board")}>FreeBoard</S.HomeBtn>
          <S.HomeBtn onClick={onClickMoveToPage("/market")}>Market</S.HomeBtn>
        </S.BasicRow>
        <S.BasicRow>
          {!accessToken ? (
            <>
              <S.LoginBtn onClick={onClickMoveToPage("/Login")}>
                Login
              </S.LoginBtn>
              <S.SignBtn onClick={onClickMoveToPage("/signUp")}>
                Sign Up
              </S.SignBtn>
            </>
          ) : (
            <>
              <S.ProfileArea>
                UserName : {data?.fetchUserLoggedIn.name} /
              </S.ProfileArea>
              <S.ProfileArea>
                Point: {data?.fetchUserLoggedIn.userPoint.amount}
              </S.ProfileArea>
              <S.HomeBtn onClick={onClickMoveToPage("/myPage")}>
                MyPage
              </S.HomeBtn>
              {isOpen && (
                <Modal
                  title="Payment"
                  visible={true}
                  onOk={onToggleModal}
                  onCancel={onToggleModal}
                >
                  <Payment />
                </Modal>
              )}
              <S.HomeBtn onClick={onToggleModal}>Payment</S.HomeBtn>
              {/* <S.HomeBtn onClick={onClickMoveToPage("/payment")}>
                Payment
              </S.HomeBtn> */}
              <S.HomeBtn onClick={logoutUserName}>logout</S.HomeBtn>
            </>
          )}
        </S.BasicRow>
      </S.Wrapper>
    </>
  );
}
