
import { Cmp8895Component } from './cmp';
describe('Cmp8895Component', () => {
  it('should add', () => {
    expect(new Cmp8895Component().add8895(1)).toBe(8896);
  });
});