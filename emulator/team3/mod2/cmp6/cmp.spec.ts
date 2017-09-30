
import { Cmp4326Component } from './cmp';
describe('Cmp4326Component', () => {
  it('should add', () => {
    expect(new Cmp4326Component().add4326(1)).toBe(4327);
  });
});