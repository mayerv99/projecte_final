import React, { useState, createContext } from "react";
import EnterprisesForm from "../components/Forms/EnterprisesForm";

export const EnterpriseContext = createContext();

export default function EnterpriseProvider({ children }) {
  const [selectedTeam, setSelectedTeam] = useState("");

  const [enterprisesList, setEnterprisesList] = useState([]);
  const [selectedEnterprise, setSelectedEnterprise] = useState({});

  const [usersList, setUsersList] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  return (
    <EnterpriseContext.Provider
      value={{
        selectedTeam,
        setSelectedTeam,
        enterprisesList,
        setEnterprisesList,
        selectedEnterprise,
        setSelectedEnterprise,
        selectedUser,
        setSelectedUser,
        usersList,
        setUsersList,
      }}
    >
      {children}
    </EnterpriseContext.Provider>
  );
}
