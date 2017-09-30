
import { Cmp1633Component } from './cmp';
describe('Cmp1633Component', () => {
  it('should add', () => {
    expect(new Cmp1633Component().add1633(1)).toBe(1634);
  });
});