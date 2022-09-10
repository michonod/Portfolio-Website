import styled from "@emotion/styled";

export const StyledButton = styled.button`
  padding: 8px 30px;
  text-transform: uppercase;
  font-size: 14px;
  background-color: transparent;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid white;
  outline: none;
  transition: 0.2s ease-in;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: #619c90;
    border: 1px solid white;
    color: white;
  }
  a {
    list-style: none;
    text-decoration: none;
    color: white;
  }
`;

export const ContactButton = styled(StyledButton)`
  padding: 15px 50px;
  background-color: transparent;
  font-size: 20px;
  font-weight: 500;
  border-color: white;
  color: white;

  &:hover {
    border: 1px solid white;
    color: white;
  }
`;

export const SubmitButton = styled(StyledButton)`
  margin: 0 auto;
  text-transform: capitalize;
`;
