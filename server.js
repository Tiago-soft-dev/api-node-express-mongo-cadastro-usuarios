import express from "express";

  import { PrismaClient } from '@prisma/client'

 // const prisma = new PrismaClient()

/*
tiagosoftdev
HwArcZ7C01nxxivC
*/

const app = express();

app.use(express.json());

const users = [];

app.get("/usuarios", (req, res) => {
  res.json(users);
});

app.post('/usuarios', (req, res)=>{
 
})

app.listen(3000, () => {
  console.log("servidor online");
});
