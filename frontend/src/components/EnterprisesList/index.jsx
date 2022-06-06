import React, { useEffect } from "react";

//Styled
import { Wrapper, ListItem } from "./styled";

//Context
import useEnterprise from "../../Hooks/useEnterprise";

//Services
import { getAllEnterprises } from "../../services/enterprise";

function EnterprisesList() {
  const {
    enterprisesList,
    setEnterprisesList,
    selectedEnterprise,
    setSelectedEnterprise,
  } = useEnterprise();

  const fetchEnterprises = async () => {
    const allEnterprises = await getAllEnterprises();
    setEnterprisesList(allEnterprises.data);
  };

  useEffect(() => {
    fetchEnterprises();
  }, []);

  const checkIfIsSelected = (enterpriseId) => {
    if (selectedEnterprise.id === enterpriseId) {
      return true;
    }
    return false;
  };

  return (
    <Wrapper>
      {enterprisesList.map((enterprise) => (
        <ListItem
          key={enterprise.id}
          onClick={() => setSelectedEnterprise(enterprise)}
          selected={checkIfIsSelected(enterprise.id)}
        >
          <header>
            {enterprise.enterpriseCode} - {enterprise.enterpriseName}
          </header>
        </ListItem>
      ))}
    </Wrapper>
  );
}

export default EnterprisesList;
