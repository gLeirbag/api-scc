const Router = require("express");
const { CronogramaController } = require("../controller/CronogramaController");

const cronogramaRouter = Router();

cronogramaRouter.post("/cronograma", async (req, res) => {
  try {
    await CronogramaController.criar(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});

cronogramaRouter.get("/cronograma", async (req, res) => {
  try {
    await CronogramaController.encontrarTodos(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});

cronogramaRouter.get("/cronograma/usuarioId=:usuarioId", async (req, res) => {
  try {
    await CronogramaController.encontrarTodosPorUsuario(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});

cronogramaRouter.get("/cronograma/:id", async (req, res) => {
  try {
    await CronogramaController.encontrarUmPorId(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});


cronogramaRouter.put("/cronograma", async (req, res) => {
  try {
    await CronogramaController.atualizar(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});

cronogramaRouter.delete("/cronograma/:id", async (req, res) => {
  try {
    await CronogramaController.deletar(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});

module.exports = { cronogramaRouter };
