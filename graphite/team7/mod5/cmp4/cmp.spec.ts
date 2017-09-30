
import { Cmp6754Component } from './cmp';
describe('Cmp6754Component', () => {
  it('should add', () => {
    expect(new Cmp6754Component().add6754(1)).toBe(6755);
  });
});