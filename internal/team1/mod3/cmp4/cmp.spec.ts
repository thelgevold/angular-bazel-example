
import { Cmp8134Component } from './cmp';
describe('Cmp8134Component', () => {
  it('should add', () => {
    expect(new Cmp8134Component().add8134(1)).toBe(8135);
  });
});