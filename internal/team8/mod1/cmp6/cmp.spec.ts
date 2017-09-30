
import { Cmp8816Component } from './cmp';
describe('Cmp8816Component', () => {
  it('should add', () => {
    expect(new Cmp8816Component().add8816(1)).toBe(8817);
  });
});