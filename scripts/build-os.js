// Rebuilds the 2D OS site (inner-site/) and copies it into static/os/
// Works on Windows, macOS and Linux.
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const inner = path.join(__dirname, '..', 'inner-site');
const target = path.join(__dirname, '..', 'static', 'os');
const run = (cmd) => execSync(cmd, { cwd: inner, stdio: 'inherit' });

if (!fs.existsSync(path.join(inner, 'node_modules'))) {
    run('npm install --legacy-peer-deps');
}
run('npm run build');
fs.rmSync(target, { recursive: true, force: true });
fs.cpSync(path.join(inner, 'build'), target, { recursive: true });
console.log('OS site copied to static/os');
