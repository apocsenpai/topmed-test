import styled from "styled-components";
import { IInput } from ".";

export const StyledInput = styled.input<IInput>`
  width: 12.5rem;
  height: 1.5rem;
  border: none;
  border-bottom: 1px solid
    ${({ theme, $error = false }) =>
      $error ? theme.color.danger : "#00000038"};
  color: ${({ theme, $error = false }) => theme.color[$error ? "danger" : "black"]};
  outline: none;
  font-size: ${({ theme }) => theme.font.sm};
  padding-left: 2rem;

  ::placeholder {
    font-family: ${({ theme }) => theme.family.base};
  }

  & ~ svg {
    color: ${({ theme, $error = false }) => theme.color[$error ? "danger" : "black"]};
  }
`;