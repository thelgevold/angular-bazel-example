
import { Cmp6574Component } from './cmp';
describe('Cmp6574Component', () => {
  it('should add', () => {
    expect(new Cmp6574Component().add6574(1)).toBe(6575);
  });
});