import React from "react";

//Styled
import { Wrapper, ListItem } from "./styled";

//Context
import useEnterprise from "../../Hooks/useEnterprise";

function EnterprisesList() {
  const { enterprisesList, setEnterprisesList } = useEnterprise();

  return <div>EnterprisesList</div>;
}

export default EnterprisesList;
