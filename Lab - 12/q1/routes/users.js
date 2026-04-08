const express = require('express');
const router = express.Router();

// Sample data (acts like database)
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

// GET all users
router.get('/', (req, res) => {
    res.json(users);
});

// GET user by ID (route parameter)
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
});

// POST (create new user)
router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT (update user)
router.put('/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    user.name = req.body.name;
    res.json(user);
});

// DELETE user
router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: "User deleted" });
});

module.exports = router;