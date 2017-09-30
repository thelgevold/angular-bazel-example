
import { Cmp8160Component } from './cmp';
describe('Cmp8160Component', () => {
  it('should add', () => {
    expect(new Cmp8160Component().add8160(1)).toBe(8161);
  });
});