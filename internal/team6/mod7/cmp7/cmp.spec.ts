
import { Cmp8677Component } from './cmp';
describe('Cmp8677Component', () => {
  it('should add', () => {
    expect(new Cmp8677Component().add8677(1)).toBe(8678);
  });
});