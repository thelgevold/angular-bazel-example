
import { Cmp1598Component } from './cmp';
describe('Cmp1598Component', () => {
  it('should add', () => {
    expect(new Cmp1598Component().add1598(1)).toBe(1599);
  });
});