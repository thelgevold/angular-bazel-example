
import { Cmp8281Component } from './cmp';
describe('Cmp8281Component', () => {
  it('should add', () => {
    expect(new Cmp8281Component().add8281(1)).toBe(8282);
  });
});