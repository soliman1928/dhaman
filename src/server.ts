import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './main.server';

// The Express server
const server = express();
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const commonEngine = new CommonEngine();

server.set('view engine', 'html');
server.set('views', browserDistFolder);

// Example Express Rest API endpoints
// server.get('/api/**', (req, res) => { });
// Serve static files from /browser
server.get('*.*', express.static(browserDistFolder, {
  maxAge: '1y'
}));

// All regular routes use the Angular engine
server.get('*', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

// Start up the Node server (for local development)
const port = process.env['PORT'] || 4000;

// Only start server if not in serverless environment
if (!process.env['VERCEL']) {
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Export the server for Vercel
export default server;