
import { Cmp7633Component } from './cmp';
describe('Cmp7633Component', () => {
  it('should add', () => {
    expect(new Cmp7633Component().add7633(1)).toBe(7634);
  });
});