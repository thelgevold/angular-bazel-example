
import { Cmp7252Component } from './cmp';
describe('Cmp7252Component', () => {
  it('should add', () => {
    expect(new Cmp7252Component().add7252(1)).toBe(7253);
  });
});