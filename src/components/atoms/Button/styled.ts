import styled from "styled-components";
import { IButton } from ".";

export const StyledButton = styled.button<IButton>`
  width: 8.25rem;
  height: 1.75rem;
  background-color: ${({ theme, $colorKey = "primary" }) =>
    theme.color[$colorKey]["main"]};
  color: ${({ theme, $colorKey = "primary" }) =>
    theme.color[$colorKey]["contrastText"]};
  border-radius: 0.75rem;
  border: none;
  font-size: ${({ theme }) => theme.font.sm};
  cursor: pointer;
  box-shadow: 0px 2.25px 2.25px 0px #00000040;

  transition: all 150ms linear;

  &:hover {
    opacity: 0.9;
  }
`;
