import styled from "@emotion/styled";

export const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    h4 {
      font-size: 25px;
    }
    label {
      font-size: 15px;
    }
    @media (max-width: 376px) {
      h4 {
        font-size: 20px;
      }
    }
  }
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

  @media (max-width: 487px) {
    width: 300px;
  }
  @media (max-width: 320px) {
    width: 250px;
  }
  @media (max-width: 280px) {
    width: 200px;
  }
`;
export const Input = styled.input`
  display: block;
  width: 400px;
  margin-bottom: 10px;
  outline: none;
  padding: 5px;
  @media (max-width: 487px) {
    width: 300px;
  }
  @media (max-width: 320px) {
    width: 250px;
  }
  @media (max-width: 280px) {
    width: 200px;
  }
`;

export const Message = styled.p<{ success?: boolean }>`
  margin: 15px auto;
  color: ${({ success }) => (success ? "green" : "red")};
  text-align: center;
  font-weight: 500;

  @media (max-width: 320px) {
    max-width: 250px;
  }
  @media (max-width: 280px) {
    width: 200px;
  }
`;
