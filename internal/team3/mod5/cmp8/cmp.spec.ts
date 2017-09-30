
import { Cmp8358Component } from './cmp';
describe('Cmp8358Component', () => {
  it('should add', () => {
    expect(new Cmp8358Component().add8358(1)).toBe(8359);
  });
});