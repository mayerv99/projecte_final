import styled from "styled-components";

export const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
  overflow-y: scroll;
  max-height: 90%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ListItem = styled.li`
  width: 98%;
  margin: 0 auto;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;

  ${(props) =>
    props.selected
      ? "box-shadow: 0 4px 8px 0 rgb(var(--primary-color))"
      : "box-shadow: 0 4px 8px 0 gray"}
`;
