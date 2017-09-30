
import { Cmp9633Component } from './cmp';
describe('Cmp9633Component', () => {
  it('should add', () => {
    expect(new Cmp9633Component().add9633(1)).toBe(9634);
  });
});