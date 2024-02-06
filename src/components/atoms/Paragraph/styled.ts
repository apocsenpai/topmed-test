import styled from "styled-components";
import { IParagraph } from ".";

export const Text = styled.p<IParagraph>`
  font-size: ${({ theme, $size = "sm" }) => theme.font[$size]};
  font-family: ${({ theme }) => theme.family.base};
  color: ${({ theme, $colorKey = "primary" }) =>
    theme.color[$colorKey]["main"]};
  ${({ $opacity }) => $opacity && "opacity: 0.7;"}
`;