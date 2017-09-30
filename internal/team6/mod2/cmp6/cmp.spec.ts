
import { Cmp8626Component } from './cmp';
describe('Cmp8626Component', () => {
  it('should add', () => {
    expect(new Cmp8626Component().add8626(1)).toBe(8627);
  });
});