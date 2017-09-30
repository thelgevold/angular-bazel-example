
import { Cmp3524Component } from './cmp';
describe('Cmp3524Component', () => {
  it('should add', () => {
    expect(new Cmp3524Component().add3524(1)).toBe(3525);
  });
});