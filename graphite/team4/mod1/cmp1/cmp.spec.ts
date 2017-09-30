
import { Cmp6411Component } from './cmp';
describe('Cmp6411Component', () => {
  it('should add', () => {
    expect(new Cmp6411Component().add6411(1)).toBe(6412);
  });
});