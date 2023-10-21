const { Router } = require("express");
const Todo = require("../models/todo");
const router = Router();

// get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Server error",
    });
  }
});

// create a todo
router.post("/", async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      done: false,
    });
    res.status(201).json({ todo });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server error" });
  }
});

// change a todo
router.put("/:id", (req, res) => {});

// delete a todo
router.delete("/:id", (req, res) => {});

module.exports = router;
