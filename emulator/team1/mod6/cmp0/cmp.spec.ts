
import { Cmp4160Component } from './cmp';
describe('Cmp4160Component', () => {
  it('should add', () => {
    expect(new Cmp4160Component().add4160(1)).toBe(4161);
  });
});