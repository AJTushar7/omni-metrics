#!/bin/bash
cd angular-client
echo "Installing Angular dependencies..."
npm install --legacy-peer-deps
echo "Starting Angular development server on port 4201..."
ng serve --port 4201 --host 0.0.0.0 --disable-host-check