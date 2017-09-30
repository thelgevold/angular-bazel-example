
import { Cmp6851Component } from './cmp';
describe('Cmp6851Component', () => {
  it('should add', () => {
    expect(new Cmp6851Component().add6851(1)).toBe(6852);
  });
});