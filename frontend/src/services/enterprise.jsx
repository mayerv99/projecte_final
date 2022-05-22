import axios from "axios";

export const getAllEnterprises = async () => {
  const allEnterprises = await axios.get("http://localhost:3030/");
  return allEnterprises;
};

export const createNewEnterprise = async (data) => {
  const newEnterprise = axios.post("http://localhost:3030/enterprises", data);
  return newEnterprise;
};
