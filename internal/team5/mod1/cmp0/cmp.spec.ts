
import { Cmp8510Component } from './cmp';
describe('Cmp8510Component', () => {
  it('should add', () => {
    expect(new Cmp8510Component().add8510(1)).toBe(8511);
  });
});