
import { Cmp1851Component } from './cmp';
describe('Cmp1851Component', () => {
  it('should add', () => {
    expect(new Cmp1851Component().add1851(1)).toBe(1852);
  });
});