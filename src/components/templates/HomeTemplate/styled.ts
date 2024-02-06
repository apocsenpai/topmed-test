import styled from "styled-components";

export const Footer = styled.div`
  margin-top: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img:nth-child(1) {
    height: 1rem;
  }
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
