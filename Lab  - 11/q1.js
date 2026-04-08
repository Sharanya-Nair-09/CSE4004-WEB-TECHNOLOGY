// Step 1: Import the built-in http module
const http = require('http');

// Step 2: Define the port number
const PORT = 3000;

// Step 3: Create the server
const server = http.createServer((req, res) => {

    // Log request details in console
    console.log(`Request received: ${req.method} ${req.url}`);

    // Step 4: Set response header
    res.setHeader('Content-Type', 'text/html');

    // Step 5: Handle different routes
    if (req.url === '/') {
        res.write('<h1>Welcome to Node.js Server</h1>');
        res.write('<p>This is the Home Page</p>');
    } 
    else if (req.url === '/about') {
        res.write('<h1>About Page</h1>');
        res.write('<p>This is a simple Node.js web server.</p>');
    } 
    else {
        res.write('<h1>404 Not Found</h1>');
    }

    // Step 6: End the response
    res.end();
});

// Step 7: Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});