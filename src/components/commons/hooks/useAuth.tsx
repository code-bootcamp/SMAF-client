import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken.ts/getAccessToken";
import { accessTokenState } from "../../../commons/store/index";

export function useAuth() {
  const router = useRouter();

  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    async function Auth() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          router.push("/");
          alert("로그인 후 이용 가능합니다!!!");
        }
      }
    }
    Auth();
  }, []);
}
