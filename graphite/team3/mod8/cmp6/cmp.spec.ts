
import { Cmp6386Component } from './cmp';
describe('Cmp6386Component', () => {
  it('should add', () => {
    expect(new Cmp6386Component().add6386(1)).toBe(6387);
  });
});