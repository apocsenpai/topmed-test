import styled from "styled-components";

interface ITitle {
  $colorKey?: "primary" | "secondary";
}
interface IParagraph {
  $colorKey?: "primary" | "secondary";
  $opacity?: boolean;
  $size?: "xs" | "sm" | "md";
}

interface ITitleHeader {
  $padding?: string;
}

interface IButton {
  $colorKey?: "primary" | "secondary";
}

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  min-height: 100dvh;
  padding-top: 7.5rem;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Main = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.75rem;
  overflow: hidden;
`;

export const WhiteBox = styled.aside`
  padding: 3rem 1.5rem 1.125rem;
`;
export const TitleHeader = styled.header<ITitleHeader>`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  ${({ $padding = "0" }) => $padding && `padding: ${$padding};`}
`;

export const Title = styled.h1<ITitle>`
  font-family: ${({ theme }) => theme.family.title};
  font-size: ${({ theme }) => theme.font.xl};
  color: ${({ theme, $colorKey }) =>
    $colorKey ? theme.color.secondary.main : theme.color.black};
`;

export const Paragraph = styled.p<IParagraph>`
  font-size: ${({ theme, $size = "sm" }) => theme.font[$size]};
  font-family: ${({ theme }) => theme.family.base};
  color: ${({ theme, $colorKey = "primary" }) =>
    theme.color[$colorKey]["main"]};
  ${({ $opacity }) => $opacity && "opacity: 0.7;"}
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.25rem;
  margin-top: 2.5rem;
  padding: 0 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  fieldset {
    position: relative;

    svg {
      position: absolute;
      top: 0.125rem;
      left: 0.25rem;
      font-size: 1.25rem;
      opacity: 0.35;
    }
  }
`;

export const Input = styled.input`
  width: 12.5rem;
  height: 1.5rem;
  border: none;
  border-bottom: 1px solid #00000038;
  outline: none;
  font-size: ${({ theme }) => theme.font.sm};
  padding-left: 2rem;

  ::placeholder {
    font-family: ${({ theme }) => theme.family.base};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.blue};
    font-family: ${({ theme }) => theme.family.details};
    font-size: ${({ theme }) => theme.font.xs};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button<IButton>`
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

export const Footer = styled.div`
  margin-top: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img:nth-child(1) {
    height: 1rem;
  }
`;

export const GreenBox = styled.aside`
  width: 12.5rem;
  padding: 3rem 0.75rem 0 1.5rem;
  background-color: ${({ theme }) => theme.color.primary.main};
  box-shadow: 4px 0px 4px 0px #00000040 inset;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  margin-top: 2rem;
`;

export const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => `${theme.color.blue}`};

  color: ${({ theme }) => `${theme.color.primary.contrastText}`};
  box-shadow: inset 0 0 4px #8db5d9, 0 0px 4px #8db5d9;
  display: flex;
  justify-content: center;
  align-items: center;
`;
