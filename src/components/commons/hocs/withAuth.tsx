import { useRouter } from "next/router";
import { useEffect } from "react";
import { accessTokenState } from "../store/index";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken.ts/getAccessToken";

export const withAuth = (Component: any) => (props: any) => {
  // 권한분기 로직 추가하기
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    async function Auth() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          router.push("/Login");
          alert("로그인 후 이용 가능합니다!!!");
        }
      }
    }
    Auth();
  }, []);

  return <Component {...props} />;
};
