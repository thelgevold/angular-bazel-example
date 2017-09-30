
import { Cmp8768Component } from './cmp';
describe('Cmp8768Component', () => {
  it('should add', () => {
    expect(new Cmp8768Component().add8768(1)).toBe(8769);
  });
});