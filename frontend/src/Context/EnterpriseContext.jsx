import React, { useState, createContext } from "react";

export const EnterpriseContext = createContext();

export default function EnterpriseProvider({ children }) {
  const [selectedTeam, setSelectedTeam] = useState("");

  const [enterprisesList, setEnterprisesList] = useState([]);
  const [selectedEnterprise, setSelectedEnterprise] = useState({});

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
      }}
    >
      {children}
    </EnterpriseContext.Provider>
  );
}
