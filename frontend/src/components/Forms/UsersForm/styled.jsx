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

  button[type="submit"] {
    padding: 10px 20px;
    background-color: rgba(var(--primary-color), 0.7);
    transition: 0.2s linear;
    border: 1px solid transparent;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 auto;
    width: 30%;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.75px;

    :hover {
      background-color: rgb(var(--primary-color));
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2%;
`;

export const FormFooter = styled.div`
  width: 100%;
  text-align: center;
`;
