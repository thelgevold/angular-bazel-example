
import { Cmp8911Component } from './cmp';
describe('Cmp8911Component', () => {
  it('should add', () => {
    expect(new Cmp8911Component().add8911(1)).toBe(8912);
  });
});