const express = require('express');
const app = express();

// ---------------- GLOBAL MIDDLEWARE ----------------

// Middleware 1: Log request details
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[GLOBAL] ${req.method} ${req.url} - ${timestamp}`);
    next(); // pass control
});

// Middleware 2: Another global middleware
app.use((req, res, next) => {
    console.log("[GLOBAL] Second middleware executed");
    next();
});

// ---------------- ROUTE-LEVEL MIDDLEWARE ----------------

// Custom middleware for specific route
const checkAuth = (req, res, next) => {
    console.log("[ROUTE] Checking authentication...");
    
    // Simulating auth success
    const isAuthenticated = true;

    if (isAuthenticated) {
        next(); // continue
    } else {
        res.send("Access Denied");
    }
};

// ---------------- ROUTES ----------------

// Simple route
app.get('/', (req, res) => {
    console.log("[ROUTE] Home route handler");
    res.send("Welcome to Middleware Demo");
});

// Route with route-level middleware
app.get('/dashboard', checkAuth, (req, res) => {
    console.log("[ROUTE] Dashboard handler");
    res.send("Welcome to Dashboard");
});

// ---------------- START SERVER ----------------
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});