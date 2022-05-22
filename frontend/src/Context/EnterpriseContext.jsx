import React, { useState, createContext } from "react";
import EnterprisesForm from "../components/Forms/EnterprisesForm";

export const EnterpriseContext = createContext();

export default function EnterpriseProvider({ children }) {
  const [selectedTeam, setSelectedTeam] = useState("");

  const [enterprisesList, setEnterprisesList] = useState([]);
  const [selectedEnterprise, setSelectedEnterprise] = useState({});

  const [selectedUser, setSelectedUser] = useState({});

  const openEnterpriseForm = () => {
    return <EnterprisesForm />;
  };

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
