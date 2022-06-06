import styled from "styled-components";

export const Wrapper = styled.div`
  width: 45%;
  height: 90%;
  box-shadow: 0 2px 20px gray;
  border-radius: 10px;
  padding: 20px;
`;

export const Header = styled.div`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  font-weight: bold;
  margin-bottom: 20px;

  button {
    padding: 2px 10px;
    background-color: rgba(var(--primary-color), 0.7);
    border: 1px solid transparent;
    color: white;
    font-size: 18px;
    border-radius: 2px;
    margin-left: 10px;
    cursor: pointer;
  }
`;
