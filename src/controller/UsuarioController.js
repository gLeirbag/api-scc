const { Usuario } = require("../model/Usuario");

class UsuarioController {
  static async criar(req, res) {
    const { apelido, senha } = req.body;

    try {
      const existeUsuario = await Usuario.findOne({ where: { apelido } });

      if (existeUsuario)
        return res.status(400).json({ erro: "Apelido ja utilizado" });

      const usuarioCriado = await Usuario.create({ apelido, senha });

      return res.status(201).json({ usuario: usuarioCriado });
    } catch (erro) {
      return res.status(400).json({ erro: "Algo deu errado" });
    }
  }

  static async encontrarUmPorId(req, res) {
    try {
      const id = req.params.id;

      const usuarioExiste = await Usuario.findOne({ where: { id } });

      if (!usuarioExiste)
        return res.status(400).json({ erro: "Usuario nao encontrado" });

      return res.status(200).json({ usuario: usuarioExiste });
    } catch {
      return res.status(400).json({ erro: "algo deu errado" });
    }
  }

  static async encontrarTodos(req, res) {
    try {
      const todosUsuarios = await Usuario.findAll();

      return res.status(200).json({ usuarios: todosUsuarios });
    } catch {
      return res.status(400).json({ erro: "algo deu errado" });
    }
  }

  static async atualizar(req, res) {
    try {
      const { apelido, senha, id } = req.body;

      const usuarioParaAtualizar = await Usuario.findOne({ where: { id } });

      if (!usuarioParaAtualizar)
        return res.status(400).json({ erro: "Usuario inexistente" });

      await Usuario.update(
        {
          apelido,
          senha,
        },
        {
          where: { id },
        }
      );

      const usuarioAtualizado = await Usuario.findOne({ where: { id } });

      return res.status(200).json({ usuario: usuarioAtualizado });
    } catch {
      return res.status(400).json({ erro: "algo deu errado" });
    }
  }

  static async deletar(req, res) {
    try {
      const id = req.params.id;

      const usuarioExiste = await Usuario.findOne({ where: { id } });

      if (!usuarioExiste)
        return res.status(400).json({ erro: "Usuario nao encontrado" });

      await Usuario.destroy({ where: { id: id } });

      return res.status(200).send();
    } catch {
      return res.status(400).json({ erro: "algo deu errado" });
    }
  }

  static async login(req, res) {
    try {
      const { apelido, senha } = req.body;

      const usuarioExiste = await Usuario.findOne({ where: { apelido } });

      if (!usuarioExiste)
        return res.status(400).json({ erro: "usuario nao encontrado" });

      if (usuarioExiste.senha != senha)
        return res.status(400).json({ erro: "senha errada" });

      return res
        .status(200)
        .json({
          id: usuarioExiste.id,
          apelido: usuarioExiste.apelido,
          createdAt: usuarioExiste.createdAt,
        });
    } catch {}
  }
}

module.exports = { UsuarioController };
