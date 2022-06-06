import React, { useEffect } from "react";

//Styled
import { Wrapper } from "./styled";

//Context
import useEnterprise from "../../Hooks/useEnterprise";

//Services
import { getEnterpriseUsers } from "../../services/users";

//Components
import ListItem from "./components/ListItem";

function UsersList({ handleOpenInterferencesModal }) {
  const { selectedEnterprise, usersList, setUsersList } = useEnterprise();

  const getUsers = async () => {
    const users = await getEnterpriseUsers(selectedEnterprise.id);
    setUsersList(users.data);
  };

  useEffect(() => {
    if (selectedEnterprise && selectedEnterprise.id) {
      console.log("SelectedEnterprise: ", selectedEnterprise);
      getUsers();
    }
  }, [selectedEnterprise]);

  return (
    <Wrapper>
      {usersList.map((user) => (
        <ListItem
          key={user.id}
          user={user}
          handleOpenInterferencesModal={handleOpenInterferencesModal}
        />
      ))}
    </Wrapper>
  );
}

export default UsersList;
