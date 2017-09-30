
import { Cmp8962Component } from './cmp';
describe('Cmp8962Component', () => {
  it('should add', () => {
    expect(new Cmp8962Component().add8962(1)).toBe(8963);
  });
});