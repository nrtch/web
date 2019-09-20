require('dotenv').config();
const postmark = require('postmark');
const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_KEY);

export default async (req, res) => {
  // res.setHeader('Content-Type', 'application/json');
  // res.statusCode = 200;
  // res.end(JSON.stringify({ status: 200, message: 'OK' }));
  try {
    const { name, phone, email, section } = req.body;
    await postmarkClient.sendEmail({
      From: 'bot@nexx.me',
      To: 'welcome@nexx.me',
      Subject: 'Запрос на подключение NEXX 🚀',
      HtmlBody: `<strong>имя:</strong> ${name}<br/><strong>телефон:</strong> ${phone}<br/><strong>email:</strong> ${email}<br/><br/>Источник на сайте: ${section ||
        'direct'}`,
    });

    res.json({ status: 200, message: 'OK' });
  } catch (e) {
    res.statusCode = 500;
    res.json({ status: 500, message: 'Error', description: e.message });
  }
};
