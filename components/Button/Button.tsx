import React, { ReactNode } from "react";
import { StyledButton } from "./styles";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
