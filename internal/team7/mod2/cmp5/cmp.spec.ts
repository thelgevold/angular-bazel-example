
import { Cmp8725Component } from './cmp';
describe('Cmp8725Component', () => {
  it('should add', () => {
    expect(new Cmp8725Component().add8725(1)).toBe(8726);
  });
});