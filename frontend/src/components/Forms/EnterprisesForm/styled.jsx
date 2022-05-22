import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Header = styled.div`
  height: 50px;
  text-align: right;
  padding: 20px;
  button {
    padding: 5px 10px;
    border: 1px solid transparent;
    background-color: rgba(var(--red), 0.7);
    cursor: pointer;
    transition: 0.2s linear;
    border-radius: 2px;
    color: white;

    :hover {
      background-color: rgb(var(--red));
    }
  }
`;

export const FormContainer = styled.div`
  padding: 20px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2%;
`;
