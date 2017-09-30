
import { Cmp1524Component } from './cmp';
describe('Cmp1524Component', () => {
  it('should add', () => {
    expect(new Cmp1524Component().add1524(1)).toBe(1525);
  });
});