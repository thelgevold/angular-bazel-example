
import { Cmp8245Component } from './cmp';
describe('Cmp8245Component', () => {
  it('should add', () => {
    expect(new Cmp8245Component().add8245(1)).toBe(8246);
  });
});