
import { Cmp6893Component } from './cmp';
describe('Cmp6893Component', () => {
  it('should add', () => {
    expect(new Cmp6893Component().add6893(1)).toBe(6894);
  });
});