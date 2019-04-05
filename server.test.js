/* eslint-env jest */

const axios = require('axios');
const delay = require('delay');

describe('server works and reachable', () => {
  it('index responses with OK', async () => {
    await expect(axios.get('http://localhost:8080/')).resolves.toHaveProperty(
      'status',
      200
    );
    // wait a bit
    await delay(1000);
    // and recheck
    await expect(axios.get('http://localhost:8080/')).resolves.toHaveProperty(
      'status',
      200
    );
  });
});
