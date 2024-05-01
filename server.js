const http = require('http');

// Your static JSON data
const jsonData = {
  message: "Hello from your Node.js server!",
  data: {
    key1: "value1",
    key2: "value2"
  }
};

const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Send the JSON data as response
  res.end(JSON.stringify(jsonData));
});

// Define the port number (default: 3000)
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});