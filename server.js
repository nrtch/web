const { createServer } = require('http');
const { parse } = require('url');
const glob = require('glob');
const next = require('next');
const path = require('path');
const ip = require('ip');
const { join } = path;

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const faviconFiles = glob
  .sync(join(__dirname, 'static/favicon', '/**/*.*'))
  .map(p => `/${path.basename(p)}`);
// const rootStaticFiles = ['/robots.txt', '/sitemap.xml'];

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    if (faviconFiles.includes(parsedUrl.pathname)) {
      const path = join(__dirname, 'static/favicon', parsedUrl.pathname);
      app.serveStatic(req, res, path);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://${ip.address()}:${port}`);
  });
});
