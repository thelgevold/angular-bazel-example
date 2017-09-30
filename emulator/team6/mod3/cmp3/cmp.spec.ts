
import { Cmp4633Component } from './cmp';
describe('Cmp4633Component', () => {
  it('should add', () => {
    expect(new Cmp4633Component().add4633(1)).toBe(4634);
  });
});