const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const { Op } = require('sequelize');

router.get('/expired', async (req, res) => {
  try {
    const expiredTodos = await Todo.findAll({
      where: {
        status: false,
        deadline: {
          [Op.lte]: new Date().toISOString(),
        },
      },
    });
    res.json(expiredTodos);
  } catch (error) {
    res.status(500).json({ error: 'Hiba lejárt TODO lekérdezésekor' });
  }
});

router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Hiba TODO létrehozásakor' });
  }
});

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Hiba TODO lekérdezésekor' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Nincs ilyen TODO' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Hiba TODO lekérdezésekor' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Nincs ilyen TODO' });
    }
    await todo.update(req.body);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Hiba TODO módosításakor' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Nincs ilyen TODO' });
    }
    await todo.destroy();
    res.json({ message: 'TODO sikeresen törölve' });
  } catch (error) {
    res.status(500).json({ error: 'Hiba TODO törlésekor' });
  }
});

module.exports = router;