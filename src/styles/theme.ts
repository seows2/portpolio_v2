import styled, { DefaultTheme, css } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 4.2rem;
  box-sizing: border-box;
`;

export const theme: DefaultTheme = {
  color: {
    black: "#333333",
    blue: "#3EFFFF",
    white: "#FFFFFF",
    red: "#FC453A",
  },
};
