import express from "express";

  import { PrismaClient } from '@prisma/client'

  const prisma = new PrismaClient()



const app = express();

app.use(express.json());

const users = [];

app.get("/usuarios", async (req, res) => {

  const users = await prisma.user.findMany()
  res.status(200).json(users)
});

app.post('/usuarios',async (req, res)=>{

  console.log(req.body.email)
  console.log(req.body.name)
  console.log(req.body.age)
 
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

  res.status(201).json(req.body)

})

app.listen(3000, () => {
  console.log("servidor online");
});
