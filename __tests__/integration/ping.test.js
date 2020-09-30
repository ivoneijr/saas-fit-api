const request = require('supertest');
const app = require('../../src/app');

describe('application health', () => {
  it('should resolve /ping request', async () => {
    const ping = await request(await app).get('/ping');

    expect(ping.status).toBe(200);
  });

  it('should resolve /status request', async () => {
    const status = await request(await app).get('/status');

    expect(status.status).toBe(200);
  });

  it('should resolve /health request', async () => {
    const health = await request(await app).get('/health');

    expect(health.status).toBe(200);
  });
});
