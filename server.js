import express from "express";

  import { PrismaClient } from '@prisma/client'

  const prisma = new PrismaClient()



const app = express();

app.use(express.json());

const users = [];

app.get("/usuarios", (req, res) => {
  res.status(200).send('rota get')
});

app.post('/usuarios',async (req, res)=>{
 
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

})

app.listen(3000, () => {
  console.log("servidor online");
});
