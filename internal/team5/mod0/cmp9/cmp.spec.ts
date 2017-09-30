
import { Cmp8509Component } from './cmp';
describe('Cmp8509Component', () => {
  it('should add', () => {
    expect(new Cmp8509Component().add8509(1)).toBe(8510);
  });
});