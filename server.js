const express = require('express');
const app = express();

// Use process.env.PORT for dynamic port, fallback to 3000 for local development
const Port = process.env.PORT ;

app.get("/", (req, res) => {
    res.send("<p>Hello Server</p>");
});

app.get("/about", (req, res) => {
    res.send("<p>Hello About</p>");
});

app.get("/contact", (req, res) => {
    res.send("<p>Hello Contact</p>");
});

app.get("/View", (req, res) => {
    res.send("<p>This is your View Pages</p>");
});

// Start the server, using the port from the environment variable
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
