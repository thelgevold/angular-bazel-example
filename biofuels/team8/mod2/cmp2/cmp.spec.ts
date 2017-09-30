
import { Cmp1822Component } from './cmp';
describe('Cmp1822Component', () => {
  it('should add', () => {
    expect(new Cmp1822Component().add1822(1)).toBe(1823);
  });
});