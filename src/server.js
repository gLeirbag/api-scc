//core
require('dotenv').config()
const express = require("express"); //framwork http
const cors = require("cors"); // cors da aplicacao (permite com que outros servidores possam fazer requisicoes)
const { sequelize } = require("./database/connection"); //database connector
//rotas (endpoints)
const { usuarioRouter } = require("./routes/usuarioRoutes");
const { cronogramaRouter } = require("./routes/cronogramaRoutes");
const { atividadeRouter } = require("./routes/atividadeRoutes");

//instanciando aplicacao express, dizendo para utilizar o json e utilizacao do cors
const app = express();
app.use(express.json());
app.use(cors());

//dizendo para a aplicacao(API) usar as rotas
app.use(usuarioRouter);
app.use(cronogramaRouter);
app.use(atividadeRouter);

//dizendo para a aplicacao(API) iniciar o servico com algumas configuracoes
try {
  app.listen(3000, async () => {
    await sequelize.sync({ force: false, alter: true });
    console.log("server rodando na porta 3000");
  });
} catch (err) {
  console.log(err);
}
