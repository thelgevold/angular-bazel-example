
import { Cmp8633Component } from './cmp';
describe('Cmp8633Component', () => {
  it('should add', () => {
    expect(new Cmp8633Component().add8633(1)).toBe(8634);
  });
});