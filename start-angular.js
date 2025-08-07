const { spawn } = require('child_process');
const path = require('path');

// Change to angular-client directory and start the Angular dev server
const angularPath = path.join(__dirname, 'angular-client');

console.log('Starting Angular development server...');

const ngServe = spawn('npx', ['ng', 'serve', '--port', '4201', '--host', '0.0.0.0'], {
  cwd: angularPath,
  stdio: 'inherit'
});

ngServe.on('error', (err) => {
  console.error('Failed to start Angular server:', err);
});

ngServe.on('close', (code) => {
  console.log(`Angular server process exited with code ${code}`);
});