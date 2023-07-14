const { Router } = require("express");
const router = Router();

// get all todos
router.get("/", (req, res) => {
    res.json({ todos: 'ff' });
});

// create a todo
router.post("/", (req, res) => {

});

// change a todo
router.put("/:id", (req, res) => {

});

// delete a todo
router.delete("/:id", (req, res) => {

});

module.exports = router;