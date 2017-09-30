
import { Cmp6876Component } from './cmp';
describe('Cmp6876Component', () => {
  it('should add', () => {
    expect(new Cmp6876Component().add6876(1)).toBe(6877);
  });
});