
import { Cmp8833Component } from './cmp';
describe('Cmp8833Component', () => {
  it('should add', () => {
    expect(new Cmp8833Component().add8833(1)).toBe(8834);
  });
});