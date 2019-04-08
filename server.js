require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { parse } = require('url');
const ip = require('ip');
const next = require('next');
const glob = require('glob');
const path = require('path');
const postmark = require('postmark');
const { join } = path;

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_KEY);

const faviconFiles = glob
  .sync(join(__dirname, 'static/favicon', '/**/*.*'))
  .map(p => `/${path.basename(p)}`);
const downloadableFiles = glob
  .sync(join(__dirname, 'static/download', '/**/*.*'))
  .map(p => `/${path.basename(p)}`);

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.post('/api/register', async (req, res) => {
    try {
      const { name, phone, email, section } = req.body;
      await postmarkClient.sendEmail({
        From: 'welcome@nt.company',
        To: 'welcome@nt.company',
        Subject: 'Запрос на подключение NEXX 🚀',
        HtmlBody: `<strong>имя:</strong> ${name}<br/><strong>телефон:</strong> ${phone}<br/><strong>email:</strong> ${email}<br/><br/>Источник на сайте: ${section ||
          'direct'}`,
      });
      return res.status(200).json({ status: 200, message: 'OK' });
    } catch (e) {
      return res
        .status(500)
        .json({ status: 500, message: 'Error', description: e.message });
    }
  });

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    if (faviconFiles.includes(parsedUrl.pathname)) {
      const path = join(__dirname, 'static/favicon', parsedUrl.pathname);
      return app.serveStatic(req, res, path);
    } else if (downloadableFiles.includes(parsedUrl.pathname)) {
      const path = join(__dirname, 'static/download', parsedUrl.pathname);
      return app.serveStatic(req, res, path);
    } else {
      return handle(req, res);
    }
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://${ip.address()}:${port}`);
  });
});
