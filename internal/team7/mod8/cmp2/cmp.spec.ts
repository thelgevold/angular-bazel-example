
import { Cmp8782Component } from './cmp';
describe('Cmp8782Component', () => {
  it('should add', () => {
    expect(new Cmp8782Component().add8782(1)).toBe(8783);
  });
});