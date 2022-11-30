const Router = require("express");
const { UsuarioController } = require("../controller/UsuarioController");

const usuarioRouter = Router();

usuarioRouter.post("/usuario", async (req, res) => {
  try {
    await UsuarioController.criar(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});

usuarioRouter.get("/usuario", async (req, res) => {
  try {
    await UsuarioController.encontrarTodos(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});

usuarioRouter.get("/usuario/:id", async (req, res) => {
  try {
    await UsuarioController.encontrarUmPorId(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});


usuarioRouter.put("/usuario", async (req, res) => {
  try {
    await UsuarioController.atualizar(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});

usuarioRouter.delete("/usuario/:id", async (req, res) => {
  try {
    await UsuarioController.deletar(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});

usuarioRouter.post("/usuario/login", async (req, res) => {
  try {
    await UsuarioController.login(req, res);
  } catch (erro) {
    console.log(erro);
    res.status(400).json({ erro: "Algo deu errado" });
  }
});

module.exports = { usuarioRouter };
