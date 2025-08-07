import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 4201;

// Serve Angular static files
app.use(express.static(path.join(__dirname, 'angular-client/dist/angular-client/browser')));

// Handle Angular routing (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'angular-client/dist/angular-client/browser/index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Angular app serving on http://localhost:${port}`);
});

// Handle shutdown gracefully
process.on('SIGINT', () => {
  console.log('Shutting down Angular server...');
  process.exit(0);
});