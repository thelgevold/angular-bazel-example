
import { Cmp4252Component } from './cmp';
describe('Cmp4252Component', () => {
  it('should add', () => {
    expect(new Cmp4252Component().add4252(1)).toBe(4253);
  });
});