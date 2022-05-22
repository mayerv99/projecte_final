import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  padding: 15px 15px;
  border-radius: 5px;
  border: ${(props) => (props.error ? "1px solid #dd5500" : "1px solid #ddd")};
  background-color: ${(props) => (props.error ? "#fff8f8" : "#f9f9f9")};
  font-size: 14px;
  ${(props) => props.error && "color: #d50000;outline: none"}
`;

export const Wrapper = styled.div`
  ${(props) => (props.width ? `width: ${props.width}` : "width: 100%")};
  margin: 10px 0;
  label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 700;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 13px;
  color: #d50000;
  font-weight: 700;
`;
