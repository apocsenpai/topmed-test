import styled from "styled-components";

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

export const FieldSet = styled.fieldset`
display: flex;
flex-direction: column;
gap: 0.5rem;
  position: relative;

  svg {
    position: absolute;
    top: 0.125rem;
    left: 0.25rem;
    font-size: 1.25rem;
    opacity: 0.35;
  }
`;
