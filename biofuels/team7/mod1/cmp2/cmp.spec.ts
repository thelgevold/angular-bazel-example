
import { Cmp1712Component } from './cmp';
describe('Cmp1712Component', () => {
  it('should add', () => {
    expect(new Cmp1712Component().add1712(1)).toBe(1713);
  });
});