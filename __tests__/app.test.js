const request = require('supertest');
const app = require('../lib/app');

const { signs } = require('../lib/zodiac-data.js');

describe('signs routes', () => {
  it('/zodiac should return list of signs', async () => {
    const res = await request(app).get('/zodiac');
    const expected = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiac/:id should return zodiac sign details', async () => {
    const res = await request(app).get('/zodiac/3');
    const cancer = {
      id: '3',
      name: 'cancer',
      dates: 'Jun 21 - Jul 22',
      symbol: 'Crab',
    };
    expect(res.body).toEqual(cancer);
  });
});
