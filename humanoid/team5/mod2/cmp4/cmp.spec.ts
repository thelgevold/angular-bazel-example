
import { Cmp7524Component } from './cmp';
describe('Cmp7524Component', () => {
  it('should add', () => {
    expect(new Cmp7524Component().add7524(1)).toBe(7525);
  });
});