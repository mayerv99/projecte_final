import axios from "axios";

export const getEnterpriseUsers = async (enterpriseId) => {
  const users = await axios.get(
    `http://localhost:3030/users?id=${enterpriseId}`
  );
  return users;
};

export const createUser = async (enterpriseId, data) => {
  await axios.post("http://localhost:3030/users", {
    ...data,
    enterpriseId: enterpriseId,
  });
};

export const getInterferences = async (userId) => {
  const interferences = await axios
    .get(`http://localhost:3030/interferences?userId=${userId}`)
    .then((res) => res.data);

  return interferences;
};

export const createNewInterference = async (data) => {
  await axios.post("http://localhost:3030/interferences", { data });
};
