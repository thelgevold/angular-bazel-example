
import { Cmp5633Component } from './cmp';
describe('Cmp5633Component', () => {
  it('should add', () => {
    expect(new Cmp5633Component().add5633(1)).toBe(5634);
  });
});