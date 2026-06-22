import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const port = Number(process.env.PORT || 4174);

const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8'
};

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, {
    'Content-Type': type,
    'Cache-Control': status === 200 ? 'public, max-age=3600' : 'no-store'
  });
  res.end(body);
}

function resolveFile(url = '/') {
  const pathname = decodeURIComponent(url.split('?')[0]);
  const safePath = path.normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  const filePath = path.join(distDir, safePath === '/' ? 'index.html' : safePath);
  return filePath.startsWith(distDir) ? filePath : path.join(distDir, 'index.html');
}

const server = http.createServer((req, res) => {
  if (!fs.existsSync(distDir)) {
    send(res, 200, 'Build not found. Run npm run build before npm start.');
    return;
  }

  const filePath = resolveFile(req.url);
  const fallbackPath = path.join(distDir, 'index.html');
  const targetPath = fs.existsSync(filePath) && fs.statSync(filePath).isFile() ? filePath : fallbackPath;
  const extension = path.extname(targetPath);
  const body = fs.readFileSync(targetPath);

  send(res, 200, body, types[extension] || 'application/octet-stream');
});

server.listen(port, () => {
  console.log(`Satyam Raj portfolio listening on http://localhost:${port}`);
});
