
import { Cmp3252Component } from './cmp';
describe('Cmp3252Component', () => {
  it('should add', () => {
    expect(new Cmp3252Component().add3252(1)).toBe(3253);
  });
});