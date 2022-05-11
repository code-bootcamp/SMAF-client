import LayoutHeader from "./header/index";
import LayoutBanner from "./banner/index";
import LayoutNavigation from "./navigation/index";
import LayoutFooter from "./footer/index";
import { ReactNode } from "react";
import * as S from "./layoutStyle";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADER = [""];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHidden = HIDDEN_HEADER.includes(router.asPath);
  return (
    <S.MainWrapper>
      {!isHidden && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <S.BodyWrapper>
        <S.Body>{props.children}</S.Body>
      </S.BodyWrapper>
      <LayoutFooter />
    </S.MainWrapper>
  );
}
