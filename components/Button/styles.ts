import styled from "@emotion/styled";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  padding: 8px 30px;
  text-transform: uppercase;
  font-size: 14px;
  background-color: transparent;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid white;
  outline: none;
  transition: 0.2s ease-in;
  cursor: ${(props) => !props.disabled && "pointer"};
  color: white;
  &:hover {
    background-color: ${(props) => !props.disabled && "#619c90"};
    border: 1px solid white;
    color: white;
  }
  a {
    list-style: none;
    text-decoration: none;
    color: white;
  }
  @media (max-width: 900px) {
    font-size: 14px;
    padding: 8px 25px;
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

  @media (max-width: 1200px) {
    padding: 8px 30px;
    font-size: 16px;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 10px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled(StyledButton)`
  margin: 0 auto;
  text-transform: capitalize;
`;
