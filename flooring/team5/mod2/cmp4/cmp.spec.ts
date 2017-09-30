
import { Cmp5524Component } from './cmp';
describe('Cmp5524Component', () => {
  it('should add', () => {
    expect(new Cmp5524Component().add5524(1)).toBe(5525);
  });
});