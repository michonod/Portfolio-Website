import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

export default Button;
