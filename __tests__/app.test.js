const request = require('supertest');
const app = require('../lib/app');

const { signs } = require('../lib/zodiac-data.js');

describe('zodiac routes', () => {
  it('/zodiac should return list of signs', async () => {
    const res = await request(app).get('/zodiac');
    const expected = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
  });
  expected(res.body).toEqual(expected);
});

// it('/zodiac/:id should return cat detail', async () => {
//   const res = await request(app).get('/zodiac/1');
//   const felix = {
//     id: '1',
//     name: 'aquarius',
//     dates: 'Jan 21 - Feb 19',
//     symbol: 'Water Bearer',
//   };
//   expect(res.body).toEqual(felix);
// });
;