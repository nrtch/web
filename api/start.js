/**
 * @format
 * @flow
 */

import axios from 'axios';

const start = (
  name: string,
  phone: string,
  email: string,
  params: { [string]: any }
) => axios.post('/api/register', { name, phone, email, ...params });

export default start;
