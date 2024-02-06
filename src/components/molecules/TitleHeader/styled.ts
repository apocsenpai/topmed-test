import styled from "styled-components";
import { ITitleHeader } from ".";

export const TitleBox = styled.header<ITitleHeader>`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  ${({ $padding = "0" }) => $padding && `padding: ${$padding};`}
`;