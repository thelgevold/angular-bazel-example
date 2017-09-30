
import { Cmp1595Component } from './cmp';
describe('Cmp1595Component', () => {
  it('should add', () => {
    expect(new Cmp1595Component().add1595(1)).toBe(1596);
  });
});