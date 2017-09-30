
import { Cmp8832Component } from './cmp';
describe('Cmp8832Component', () => {
  it('should add', () => {
    expect(new Cmp8832Component().add8832(1)).toBe(8833);
  });
});