import React from "react";

//Context
import EnterpriseProvider from "../../Context/EnterpriseContext";
import Card from "../Card";

//Styled
import { Wrapper } from "./styled";

function ListsContainer() {
  return (
    <Wrapper>
      <EnterpriseProvider>
        <Card title="Empreendimentos"></Card>
        <Card title="Usuários"></Card>
      </EnterpriseProvider>
    </Wrapper>
  );
}

export default ListsContainer;
