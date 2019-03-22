/**
 * @format
 * @flow
 */

import axios from 'axios';

const start = (name: string, phone: string, email: string) =>
  axios.post(
    '/api/register',
    { name, phone, email }
    // {
    //   From: 'api@nexx.me',
    //   To: 'welcome@nt.company',
    //   Subject: 'Подключаю NEXX! 🔥 SUTATO!!! 🚀',
    //   HtmlBody: `<strong>Запрос на подключение NEXX</strong><br/><br/><strong>имя:</strong> ${name}<br/><strong>телефон:</strong> ${phone}<br/><strong>email:</strong> ${email}`,
    // },
    // {
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'X-Postmark-Server-Token': '547adee9-236b-4896-a354-d218a7ef6d33',
    //   },
    // }
  );

export default start;
