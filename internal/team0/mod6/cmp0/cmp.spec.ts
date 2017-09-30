
import { Cmp8060Component } from './cmp';
describe('Cmp8060Component', () => {
  it('should add', () => {
    expect(new Cmp8060Component().add8060(1)).toBe(8061);
  });
});