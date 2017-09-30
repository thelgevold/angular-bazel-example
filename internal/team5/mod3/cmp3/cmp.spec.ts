
import { Cmp8533Component } from './cmp';
describe('Cmp8533Component', () => {
  it('should add', () => {
    expect(new Cmp8533Component().add8533(1)).toBe(8534);
  });
});