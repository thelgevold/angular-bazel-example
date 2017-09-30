
import { Cmp8664Component } from './cmp';
describe('Cmp8664Component', () => {
  it('should add', () => {
    expect(new Cmp8664Component().add8664(1)).toBe(8665);
  });
});