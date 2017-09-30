
import { Cmp1597Component } from './cmp';
describe('Cmp1597Component', () => {
  it('should add', () => {
    expect(new Cmp1597Component().add1597(1)).toBe(1598);
  });
});