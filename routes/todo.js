const { Router } = require("express");
const Todo = require("../models/todo");
const router = Router();

// get all todos
router.get("/", (req, res) => {
  res.json({ todos: "ff" });
});

// create a todo
router.post("/", async (req, res) => {
  try {
    const todo = await new Todo.create({
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
