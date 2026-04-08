const express = require('express');
const app = express();

app.use(express.json());

// Home route (FIX)
app.get('/', (req, res) => {
    res.send('Welcome to the REST API Server');
});

// Import routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});