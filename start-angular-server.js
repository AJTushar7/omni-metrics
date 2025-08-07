const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Set up Angular CLI configuration to disable analytics
const angularPath = path.join(__dirname, 'angular-client');
const configPath = path.join(angularPath, 'angular.json');

console.log('Starting Angular development server...');

// Start the Angular dev server with analytics disabled
const ngServe = spawn('ng', ['serve', '--port', '4201', '--host', '0.0.0.0', '--disable-host-check'], {
  cwd: angularPath,
  stdio: 'inherit',
  env: { 
    ...process.env, 
    NG_CLI_ANALYTICS: 'false',
    NODE_ENV: 'development'
  }
});

ngServe.on('error', (err) => {
  console.error('Failed to start Angular server:', err);
  process.exit(1);
});

ngServe.on('close', (code) => {
  console.log(`Angular server process exited with code ${code}`);
});

// Keep the process alive
process.on('SIGINT', () => {
  console.log('Shutting down Angular server...');
  ngServe.kill();
  process.exit(0);
});