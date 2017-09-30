
import { Cmp8586Component } from './cmp';
describe('Cmp8586Component', () => {
  it('should add', () => {
    expect(new Cmp8586Component().add8586(1)).toBe(8587);
  });
});