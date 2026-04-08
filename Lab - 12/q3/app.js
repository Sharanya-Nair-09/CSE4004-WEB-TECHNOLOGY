const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// 🔹 Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// 🔹 Import routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to MongoDB CRUD API');
});

// 🔹 Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});