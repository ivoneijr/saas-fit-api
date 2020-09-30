const request = require('supertest');

const app = require('../../../src/app');
const { CREATE_USER } = require('../../scenarios/index');

describe('auth flux', () => {
  beforeAll(async () => {
    const dereck = {
      name: 'Dereck Bubols',
      email: 'dereckbubols@teambubols.com',
      password: '$2b$10$OrWxxadbR3LJGGQMpPMx3ucSXsXIyBZUlfnVvewMhaFpM2VlsvBYi', // whoami
      role: 'ADMIN',
    };
    await CREATE_USER(dereck);
  });

  it('/login ', async () => {
    const logged = await request(await app)
      .post('/auth/login')
      .send({
        email: 'dereckbubols@teambubols.com',
        password: 'whoami',
      });

    expect(Object.keys(logged.body)).toStrictEqual([
      'access_token',
      'refresh_token',
    ]);
    expect(logged.status).toBe(200);
  });

  it('/refresh ', async () => {
    const logged = await request(await app)
      .post('/auth/login')
      .send({
        email: 'dereckbubols@teambubols.com',
        password: 'whoami',
      });

    const refreshed = await request(await app)
      .post('/auth/refresh')
      .send({
        refresh_token: logged.body.refresh_token,
      });

    expect(Object.keys(logged.body)).toStrictEqual([
      'access_token',
      'refresh_token',
    ]);
    expect(refreshed.status).toBe(200);
  });
});
