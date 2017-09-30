
import { Cmp6782Component } from './cmp';
describe('Cmp6782Component', () => {
  it('should add', () => {
    expect(new Cmp6782Component().add6782(1)).toBe(6783);
  });
});