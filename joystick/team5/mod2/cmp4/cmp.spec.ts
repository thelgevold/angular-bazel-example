
import { Cmp9524Component } from './cmp';
describe('Cmp9524Component', () => {
  it('should add', () => {
    expect(new Cmp9524Component().add9524(1)).toBe(9525);
  });
});