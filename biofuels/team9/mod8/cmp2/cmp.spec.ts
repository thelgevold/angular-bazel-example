
import { Cmp1982Component } from './cmp';
describe('Cmp1982Component', () => {
  it('should add', () => {
    expect(new Cmp1982Component().add1982(1)).toBe(1983);
  });
});