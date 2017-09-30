
import { Cmp8508Component } from './cmp';
describe('Cmp8508Component', () => {
  it('should add', () => {
    expect(new Cmp8508Component().add8508(1)).toBe(8509);
  });
});