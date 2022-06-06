import styled from "styled-components";

export const Details = styled.details`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  width: 98%;
  margin: 0 auto;
`;

export const Summary = styled.summary`
  font-weight: 700;
  display: flex;
  justify-content: space-between;

  div {
    width: 15%;
    display: flex;
    justify-content: space-between;

    button {
      padding: 2px 10px;
      border: 1px solid transparent;
      color: white;
      font-size: 18px;
      border-radius: 2px;
      margin-left: 10px;
      cursor: pointer;
    }

    .addBtn {
      background-color: rgba(var(--primary-color), 0.7);
    }

    .deleteBtn {
      background-color: rgba(var(--red), 0.7);
    }
  }
`;

export const Wrapper = styled.div`
  padding: 15px;
`;
