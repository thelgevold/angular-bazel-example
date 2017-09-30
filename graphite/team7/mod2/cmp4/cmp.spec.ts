
import { Cmp6724Component } from './cmp';
describe('Cmp6724Component', () => {
  it('should add', () => {
    expect(new Cmp6724Component().add6724(1)).toBe(6725);
  });
});