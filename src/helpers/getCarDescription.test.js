import { getCarDescription } from './getCarDescription';

describe('getCarDescription', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              word: 'car',
            },
            {
              word: 'wheels',
            },
            {
              word: 'fuel',
            },
          ]),
      })
    );
  });

  it('should return a string', async () => {
    expect(
      typeof (await getCarDescription({ make: 'Honda', model: 'Accord' }))
    ).toBe('string');
  });

  it('should return a description of a car', async () => {
    const car = { make: 'Honda', model: 'Accord' };
    const expected = 'car, wheels, fuel';
    const result = await getCarDescription(car);
    expect(global.fetch).toHaveBeenCalled();
    expect(result).toBe(expected);
  });
});
