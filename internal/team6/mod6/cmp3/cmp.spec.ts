
import { Cmp8663Component } from './cmp';
describe('Cmp8663Component', () => {
  it('should add', () => {
    expect(new Cmp8663Component().add8663(1)).toBe(8664);
  });
});