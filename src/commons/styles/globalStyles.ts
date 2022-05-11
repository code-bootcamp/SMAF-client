import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    height: 5%;
    background: skyblue;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f2f2f2;
  }
`;
