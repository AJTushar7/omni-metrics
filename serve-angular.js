const express = require('express');
const path = require('path');

const app = express();
const port = 4201;

// Serve Angular static files
app.use(express.static(path.join(__dirname, 'angular-client/dist/angular-client')));

// Handle Angular routing (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'angular-client/dist/angular-client/index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Angular app serving on http://localhost:${port}`);
});

// Handle shutdown gracefully
process.on('SIGINT', () => {
  console.log('Shutting down Angular server...');
  process.exit(0);
});