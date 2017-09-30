
import { Cmp6258Component } from './cmp';
describe('Cmp6258Component', () => {
  it('should add', () => {
    expect(new Cmp6258Component().add6258(1)).toBe(6259);
  });
});