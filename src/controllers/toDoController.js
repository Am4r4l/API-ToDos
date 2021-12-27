import * as Yup from 'yup';
import ToDo from '../models/ToDo';

class TaskController {
  async index(req, res) {
    const toDos = await ToDo.findAll({
      where: { user_id: req.userId, completo: false },
    });
    return res.json({ toDos });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      titulo: Yup.string().required(),
      descricao: Yup.string(),
      completo: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha ao cadastrar' });
    }

    const { titulo, descricao, completo } = req.body;

    const toDos = await ToDo.create({
      user_id: req.userId,
      titulo,
      descricao,
      completo,
    });
    return res.json({ toDos });
  }

  async update(req, res) {
    const { todo_id } = req.params;

    const todo = await ToDo.findByPk(todo_id);

    if (!todo) {
      return res.status(400).json({ error: 'To-Do não existe.' });
    }

    await todo.update(req.body);

    return res.json(todo);
  }

  async delete(req, res) {
    const { todo_id } = req.params;

    const todo = await ToDo.findByPk(todo_id);

    if (!todo) {
      return res.status(400).json({ error: 'To-Do não existe.' });
    }
    if (todo.user_id !== req.userId) {
      return res.status(401).json({ error: 'Requisição não autorizada' });
    }

    await todo.destroy();

    return res.send();
  }
}

export default new TaskController();
