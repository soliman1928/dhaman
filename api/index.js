const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Import the built Angular server
const express = require('express');
const { APP_BASE_HREF } = require('@angular/common');
const { CommonEngine } = require('@angular/ssr');
const { join } = require('path');

// Create Express server
const server = express();
const distFolder = join(process.cwd(), 'dist/furniture-transportation-angular');
const browserDistFolder = join(distFolder, 'browser');
const serverDistFolder = join(distFolder, 'server');

// Import the Angular server bootstrap
let bootstrap;
try {
  bootstrap = require(join(serverDistFolder, 'main.js')).default;
} catch (error) {
  console.error('Failed to load Angular server:', error);
}

const commonEngine = new CommonEngine();

// Serve static files
server.use(express.static(browserDistFolder));

// SSR route handler
server.get('*', async (req, res) => {
  try {
    if (!bootstrap) {
      return res.status(500).send('Server bootstrap failed');
    }

    const indexHtml = join(serverDistFolder, 'index.server.html');
    
    const html = await commonEngine.render({
      bootstrap,
      documentFilePath: indexHtml,
      url: req.originalUrl,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
    
    res.send(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = server;