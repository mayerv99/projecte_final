import React, { useState } from "react";

//Context
import EnterpriseProvider from "../../Context/EnterpriseContext";

//Styled
import { Wrapper } from "./styled";

//Components
import Card from "../Card";
import EnterprisesForm from "../Forms/EnterprisesForm";

function ListsContainer() {
  const [enterprisesFormVisibility, setEnterprisesFormVisibility] =
    useState(false);

  const handleOpenEnterprisesModal = () => {
    return setEnterprisesFormVisibility(true);
  };

  const handleCloseEnterprisesModal = () => {
    return setEnterprisesFormVisibility(false);
  };

  return (
    <Wrapper>
      <EnterpriseProvider>
        {enterprisesFormVisibility && (
          <EnterprisesForm
            handleCloseEnterprisesModal={handleCloseEnterprisesModal}
          />
        )}
        <Card
          title="Empreendimentos"
          buttonAction={handleOpenEnterprisesModal}
        ></Card>
        <Card title="Usuários"></Card>
      </EnterpriseProvider>
    </Wrapper>
  );
}

export default ListsContainer;
