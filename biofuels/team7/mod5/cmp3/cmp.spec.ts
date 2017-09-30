
import { Cmp1753Component } from './cmp';
describe('Cmp1753Component', () => {
  it('should add', () => {
    expect(new Cmp1753Component().add1753(1)).toBe(1754);
  });
});