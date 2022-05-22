import express from "express";
import cors from "cors";

import prismaClient from "../database/PrismaClient";

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

const PORT = 3030;

app.get("/", async (req, res) => {
  const allEnterprises = await prismaClient.enterprise.findMany();
  return res.status(200).send(allEnterprises);
});

app.post("/enterprises", async (req, res) => {
  await prismaClient.enterprise.create({
    data: req.body,
  });

  return res.status(201).send({ message: "successfully created" });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
