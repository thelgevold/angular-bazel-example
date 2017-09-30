
import { Cmp1301Component } from './cmp';
describe('Cmp1301Component', () => {
  it('should add', () => {
    expect(new Cmp1301Component().add1301(1)).toBe(1302);
  });
});