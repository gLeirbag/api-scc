const { Cronograma } = require("../model/Cronograma");

class CronogramaController {
  static async criar(req, res) {
    const { titulo, usuarioId } = req.body;

    try {
      const cronogramaCriado = await Cronograma.create({ titulo, usuarioId });

      return res.status(201).json({ cronograma: cronogramaCriado });
    } catch (erro) {
      return res.status(400).json({ erro: "Algo deu errado" });
    }
  }

  static async encontrarUmPorId(req, res) {
    try {
      const id = req.params.id;

      const cronogramaExiste = await Cronograma.findOne({ where: { id } });

      if (!cronogramaExiste)
        return res.status(400).json({ erro: "cronograma nao encontrado" });

      return res.status(200).json({ cronograma: cronogramaExiste });
    } catch {
      return res.status(400).json({ erro: "algo deu errado" });
    }
  }

  static async encontrarTodos(req, res) {
    try {
      const todosCronograma = await Cronograma.findAll();

      return res.status(200).json({ cronograma: todosCronograma });
    } catch {
      return res.status(400).json({ erro: "algo deu errado" });
    }
  }

  static async encontrarTodosPorUsuario(req, res) {
    try {
      const usuarioId = req.params.usuarioId;

      const todosCronograma = await Cronograma.findAll({
        where: { usuarioId },
      });

      return res.status(200).json(todosCronograma);
    } catch {
      return res.status(400).json({ erro: "algo deu errado" });
    }
  }

  static async atualizar(req, res) {
    try {
      const { titulo, id } = req.body;

      const cronogramaParaAtualizar = await Cronograma.findOne({
        where: { id },
      });

      if (!cronogramaParaAtualizar)
        return res.status(400).json({ erro: "cronograma inexistente" });

      await Cronograma.update(
        {
          apelido,
          senha,
        },
        {
          where: { id },
        }
      );

      const cronogramaAtualizado = await Cronograma.findOne({ where: { id } });

      return res.status(200).json({ cronograma: cronogramaAtualizado });
    } catch {
      return res.status(400).json({ erro: "algo deu errado" });
    }
  }

  static async deletar(req, res) {
    try {
      const id = req.params.id;

      const cronogramaExiste = await Cronograma.findOne({ where: { id } });

      if (!cronogramaExiste)
        return res.status(400).json({ erro: "cronograma nao encontrado" });

      await Cronograma.destroy({ where: { id } });

      return res.status(200).send(true);
    } catch {
      return res.status(400).json({ erro: "algo deu errado" });
    }
  }
}

module.exports = { CronogramaController };
