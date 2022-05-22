import { useContext } from "react";

import { EnterpriseContext } from "../Context/EnterpriseContext";

export default function useEnterprise() {
  const {
    selectedTeam,
    setSelectedTeam,
    enterprisesList,
    setEnterprisesList,
    selectedEnterprise,
    setSelectedEnterprise,
    selectedUser,
    setSelectedUser,
  } = useContext(EnterpriseContext);

  return {
    selectedTeam,
    setSelectedTeam,
    enterprisesList,
    setEnterprisesList,
    selectedEnterprise,
    setSelectedEnterprise,
    selectedUser,
    setSelectedUser,
  };
}
