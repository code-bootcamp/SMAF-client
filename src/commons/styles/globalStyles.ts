import { css } from "@emotion/react";

export const globalStyles = css`
  /* * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "NotoSansKR", "Roboto";
  } */

  html {
    width: 100%;
    min-width: 100%;
    min-height: 100%;
    height: 100%;
    font-size: 62.5%;
    margin: 0;
    box-sizing: border-box;
    font-family: "NotoSansKR", "Roboto";
  }

  p,
  h1 {
    margin: 0;
  }

  /* ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    height: 5%;
    background: skyblue;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f2f2f2;
  } */

  @font-face {
    font-family: "NotoSansKR";
    font-style: normal;
    src: url("/fonts/NotoSansKR-Regular.otf") format("opentype");
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    src: url("/fonts/Roboto-Regular.ttf") format("truetype");
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
`;
