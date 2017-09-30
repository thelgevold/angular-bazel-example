
import { Cmp5712Component } from './cmp';
describe('Cmp5712Component', () => {
  it('should add', () => {
    expect(new Cmp5712Component().add5712(1)).toBe(5713);
  });
});