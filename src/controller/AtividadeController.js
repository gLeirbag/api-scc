const { Atividade } = require("../model/Atividade");

class AtividadeController {
  static async criar(req, res) {
    const { titulo, horarioInicial, horarioFinal, cronogramaId } = req.body;

    try {
      const atividadeCriada = await Atividade.create({
        titulo,
        horarioInicial,
        horarioFinal,
        cronogramaId,
      });

      return res.status(201).json({ atividade: atividadeCriada });
    } catch (erro) {
      return res.status(400).json({ erro: "Algo deu errado" });
    }
  }

  static async encontrarUmPorId(req, res) {
    try {
      const id = req.params.id;

      const atividadeExiste = await Atividade.findOne({ where: { id } });

      if (!atividadeExiste)
        return res.status(400).json({ erro: "Atividade nao encontrada" });

      return res.status(200).json({ atividade: atividadeExiste });
    } catch {
      return res.status(400).json({ erro: "algo deu errado" });
    }
  }

  static async encontrarTodos(req, res) {
    try {
      const todosAtividade = await Atividade.findAll();

      return res.status(200).send(todosAtividade);
    } catch {
      return res.status(400).json({ erro: "algo deu errado" });
    }
  }

  static async encontrarTodosPorCronograma(req, res) {
    try {
      const cronogramaId = req.params.cronogramaId;
      const todosAtividade = await Atividade.findAll({
        where: { cronogramaId },
      });
      return res.status(200).json(todosAtividade);
    } catch {
      return res.status(400).json({ erro: "algo deu errado" });
    }
  }

  static async atualizar(req, res) {
    try {
      const { titulo, horarioInicial, horarioFinal } = req.body;

      const atividadeAtualizar = await Atividade.findOne({ where: { id } });

      if (!atividadeAtualizar)
        return res.status(400).json({ erro: "Atividade inexistente" });

      await Atividade.update(
        {
          titulo,
          horarioInicial,
          horarioFinal,
        },
        {
          where: { id },
        }
      );

      const atividadeAtualizado = await Atividade.findOne({ where: { id } });

      return res.status(200).json({ atividade: atividadeAtualizado });
    } catch {
      return res.status(400).json({ erro: "algo deu errado" });
    }
  }

  static async deletar(req, res) {
    try {
      const id = req.params.id;

      const atividadeExiste = await Atividade.findOne({ where: { id } });

      if (!atividadeExiste)
        return res.status(400).json({ erro: "Atividade nao encontrado" });

      await Atividade.destroy({ where: { id } });

      return res.status(200).send(true);
    } catch {
      return res.status(400).json({ erro: "algo deu errado" });
    }
  }
}

module.exports = { AtividadeController };
