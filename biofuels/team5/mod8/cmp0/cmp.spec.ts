
import { Cmp1580Component } from './cmp';
describe('Cmp1580Component', () => {
  it('should add', () => {
    expect(new Cmp1580Component().add1580(1)).toBe(1581);
  });
});