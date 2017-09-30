
import { Cmp6094Component } from './cmp';
describe('Cmp6094Component', () => {
  it('should add', () => {
    expect(new Cmp6094Component().add6094(1)).toBe(6095);
  });
});