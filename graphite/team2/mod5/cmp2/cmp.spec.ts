
import { Cmp6252Component } from './cmp';
describe('Cmp6252Component', () => {
  it('should add', () => {
    expect(new Cmp6252Component().add6252(1)).toBe(6253);
  });
});