import React from "react";

//Styled
import { Wrapper, Header } from "./styled";

function Card({ title, buttonAction, children }) {
  return (
    <Wrapper>
      <Header>
        {title} <button onClick={buttonAction}>&#43;</button>
      </Header>
      {children}
    </Wrapper>
  );
}

export default Card;
