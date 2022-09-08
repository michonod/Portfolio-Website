import styled from "@emotion/styled";

export const StyledButton = styled.button`
  padding: 5px 20px;
  font-size: 16px;
  background-color: transparent;

  border-radius: 4px;
  border: 1px solid white;
  outline: none;
  transition: 0.2s ease-in;
  cursor: pointer;
  color: white;
  font-weight: 700;
  &:hover {
    background-color: rgba(139, 187, 226, 0.5);

    border: 1px solid white;
  }
  a {
    list-style: none;
    text-decoration: none;
    color: #333;
  }
`;

export const ContactButton = styled(StyledButton)`
  padding: 10px 40px;
  background-color: transparent;
  border-color: #333;
  color: #333;

  &:hover {
    border: 1px solid #333;
  }
  a {
    color: #333;
    &:hover {
      color: #333;
    }
  }
`;
