import React, { useEffect, useState } from "react";

//Styled
import { Details, Summary, Wrapper } from "./styled";

//Services
import { getInterferences } from "../../../../services/users";

//Context
import useEnterprise from "../../../../Hooks/useEnterprise";

function ListItem({ user, handleOpenInterferencesModal }) {
  const [interferences, setInterferences] = useState();

  const { selectedUser, setSelectedUser } = useEnterprise();

  useEffect(() => {
    if (selectedUser && selectedUser.id) {
      getUserInterferences(selectedUser.id);
    }
  }, [selectedUser]);

  const getUserInterferences = async () => {
    const res = await getInterferences(selectedUser.id);
    setInterferences(res);
  };

  return (
    <Details
      onClick={() => {
        setSelectedUser(user);
      }}
    >
      <Summary>
        {user?.userName}
        <div>
          <button className="addBtn" onClick={handleOpenInterferencesModal}>
            &#43;
          </button>
          <button className="deleteBtn">&#10006;</button>
        </div>
      </Summary>
      <Wrapper>
        {interferences &&
          interferences.map((interference, index) => (
            <div style={{ display: "flex" }}>
              {index + 1} - {interference.actType}
            </div>
          ))}
      </Wrapper>
    </Details>
  );
}

export default ListItem;
