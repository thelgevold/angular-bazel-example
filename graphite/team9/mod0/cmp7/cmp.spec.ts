
import { Cmp6907Component } from './cmp';
describe('Cmp6907Component', () => {
  it('should add', () => {
    expect(new Cmp6907Component().add6907(1)).toBe(6908);
  });
});