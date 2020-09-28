import { timeApi } from './index';

describe('timeApi', () => {
  test('should get data', (done) => {
    timeApi.get()
      .then((data) => {
        expect(data).toEqual(null);
        done()
      })
  });

  test('should update data', (done) => {
    const test = {foo: 123}

    timeApi.update(test)
      .then((data) => {
        expect(data).toEqual(test);
        done()
      })
  });
})


