import styled from "@emotion/styled";

export const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h4`
  color: white;
  font-size: 30px;
  margin: 30px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid white;
  border-radius: 4px;
  padding: 20px;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  color: white;
`;

export const TextArea = styled.textarea`
  width: 400px;
  padding: 5px;
  margin-bottom: 20px;

  outline: none;
`;
export const Input = styled.input`
  display: block;
  width: 400px;
  margin-bottom: 10px;
  outline: none;
  padding: 5px;
`;
