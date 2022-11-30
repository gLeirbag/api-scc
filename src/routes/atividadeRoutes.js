const Router = require("express");
const { AtividadeController } = require("../controller/AtividadeController");

const atividadeRouter = Router();

atividadeRouter.post("/usuario", async (req, res) => {
  try {
    await AtividadeController.criar(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});

atividadeRouter.get("/usuario", async (req, res) => {
  try {
    await AtividadeController.encontrarTodos(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});

atividadeRouter.get("/usuario/:id", async (req, res) => {
  try {
    await AtividadeController.encontrarUmPorId(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});


atividadeRouter.put("/usuario", async (req, res) => {
  try {
    await AtividadeController.atualizar(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});

atividadeRouter.delete("/usuario/:id", async (req, res) => {
  try {
    await AtividadeController.deletar(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});

module.exports = { atividadeRouter };
