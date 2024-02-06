import styled from "styled-components";
import { ITitle } from ".";

export const Heading = styled.h1<ITitle>`
  font-family: ${({ theme }) => theme.family.title};
  font-size: ${({ theme }) => theme.font.xl};
  color: ${({ theme, $colorKey }) =>
    $colorKey ? theme.color.secondary.main : theme.color.black};
`;