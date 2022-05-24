import styled from "@emotion/styled";

// export const Column = styled.span`
//   margin: 0px 50px;
// `;

interface IPageProps {
  isActive?: boolean;
}

export const Wrapper = styled.div`
  width: 800px;
  height: 36px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

export const Page = styled.span`
  margin: 0px auto;
  color: ${(props: IPageProps) => (props.isActive ? "#111111" : "#999999")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
  line-height: 36px;
`;
