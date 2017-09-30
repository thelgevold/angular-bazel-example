
import { Cmp8524Component } from './cmp';
describe('Cmp8524Component', () => {
  it('should add', () => {
    expect(new Cmp8524Component().add8524(1)).toBe(8525);
  });
});