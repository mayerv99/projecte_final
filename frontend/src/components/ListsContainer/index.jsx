import React, { useState } from "react";

//Context
import EnterpriseProvider from "../../Context/EnterpriseContext";

//Styled
import { Wrapper } from "./styled";

//Components
import Card from "../Card";
import EnterprisesList from "../EnterprisesList";
import UsersList from "../UsersList";
import EnterprisesForm from "../Forms/EnterprisesForm";
import UsersForm from "../Forms/UsersForm";
import InterferencesForm from "../Forms/InterferencesForm";

function ListsContainer() {
  const [enterprisesFormVisibility, setEnterprisesFormVisibility] =
    useState(false);
  const [usersFormVisibility, setUsersFormVisibility] = useState(false);
  const [interferencesFormVisibility, setUsersInterferencesFormVisibility] =
    useState(false);

  const handleOpenEnterprisesModal = () => {
    return setEnterprisesFormVisibility(true);
  };

  const handleCloseEnterprisesModal = () => {
    return setEnterprisesFormVisibility(false);
  };

  const handleOpenUsersModal = () => {
    return setUsersFormVisibility(true);
  };
  const handleCloseUsersModal = () => {
    return setUsersFormVisibility(false);
  };

  const handleOpenInterferencesModal = () => {
    return setUsersInterferencesFormVisibility(true);
  };
  const handleCloseInterferencesModal = () => {
    return setUsersInterferencesFormVisibility(false);
  };

  return (
    <Wrapper>
      <EnterpriseProvider>
        {enterprisesFormVisibility && (
          <EnterprisesForm
            handleCloseEnterprisesModal={handleCloseEnterprisesModal}
          />
        )}
        {usersFormVisibility && (
          <UsersForm handleCloseUsersModal={handleCloseUsersModal} />
        )}
        {interferencesFormVisibility && (
          <InterferencesForm
            handleCloseInterferencesModal={handleCloseInterferencesModal}
          />
        )}

        <Card title="Empreendimentos" buttonAction={handleOpenEnterprisesModal}>
          <EnterprisesList />
        </Card>
        <Card title="Usuários" buttonAction={handleOpenUsersModal}>
          <UsersList
            handleOpenInterferencesModal={handleOpenInterferencesModal}
          />
        </Card>
      </EnterpriseProvider>
    </Wrapper>
  );
}

export default ListsContainer;
