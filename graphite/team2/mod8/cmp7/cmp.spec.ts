
import { Cmp6287Component } from './cmp';
describe('Cmp6287Component', () => {
  it('should add', () => {
    expect(new Cmp6287Component().add6287(1)).toBe(6288);
  });
});