
import { Cmp6524Component } from './cmp';
describe('Cmp6524Component', () => {
  it('should add', () => {
    expect(new Cmp6524Component().add6524(1)).toBe(6525);
  });
});