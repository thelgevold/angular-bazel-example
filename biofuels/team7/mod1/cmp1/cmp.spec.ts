
import { Cmp1711Component } from './cmp';
describe('Cmp1711Component', () => {
  it('should add', () => {
    expect(new Cmp1711Component().add1711(1)).toBe(1712);
  });
});