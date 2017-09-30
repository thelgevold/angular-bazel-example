
import { Cmp6412Component } from './cmp';
describe('Cmp6412Component', () => {
  it('should add', () => {
    expect(new Cmp6412Component().add6412(1)).toBe(6413);
  });
});