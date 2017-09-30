
import { Cmp8511Component } from './cmp';
describe('Cmp8511Component', () => {
  it('should add', () => {
    expect(new Cmp8511Component().add8511(1)).toBe(8512);
  });
});