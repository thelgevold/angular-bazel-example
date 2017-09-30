
import { Cmp7712Component } from './cmp';
describe('Cmp7712Component', () => {
  it('should add', () => {
    expect(new Cmp7712Component().add7712(1)).toBe(7713);
  });
});