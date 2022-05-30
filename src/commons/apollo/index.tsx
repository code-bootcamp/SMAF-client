import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { useRecoilState } from "recoil";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { getAccessToken } from "../libraries/getAccessToken.ts/getAccessToken";
import { onError } from "@apollo/client/link/error";
import { accessTokenState } from "../store/index";

interface IAppProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IAppProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const [, setUserInfo] = useRecoilState(userInfoState);

  // useEffect(() => {
  //   const accessToken = Cookies.get("accessToken");
  //   if (accessToken) {
  //     setAccessToken(accessToken);
  //   } else {
  //     getAccessToken().then((newAccessToken) => {
  //       if (!newAccessToken) return;
  //       setAccessToken(newAccessToken);
  //     });
  //   }
  // }, []);

  // 2. restoreToken API 이용한 로그인 방식 (원래 방식)
  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // api 요청을 할때 누군지 증명할거를 갖고만 있었던 상황이였고 이걸 제출함으로써 나를 증명

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러(UNAUTHENTICATED)인지를 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
            // 3-2. 변경된 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });
  const uploadLink = createUploadLink({
    uri: "https://backend.smaf.shop/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
