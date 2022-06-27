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

app.get("/users", async (req, res) => {
  if (req.query && req.query.id) {
    const id = (req.query as any).id;
    const users = await prismaClient.user.findMany({
      where: { enterpriseId: parseInt(id) },
    });
    return res.status(200).send(users);
  }
});

app.get("/interferences", async (req, res) => {
  if (req.query && req.query.userId) {
    const userId = (req.query as any).userId;
    const interferences = await prismaClient.interference.findMany({
      where: { userId: parseInt(userId) },
    });
    return res.status(200).send(interferences);
  }
});

app.post("/interferences", async (req, res) => {
  await prismaClient.interference.create({
    data: req.body.data,
  });
});

app.post("/users", async (req, res) => {
  await prismaClient.user.create({
    data: req.body,
  });
  return res.status(201).send({ message: "successfully created" });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
