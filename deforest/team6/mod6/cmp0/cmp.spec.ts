
import { Cmp3660Component } from './cmp';
describe('Cmp3660Component', () => {
  it('should add', () => {
    expect(new Cmp3660Component().add3660(1)).toBe(3661);
  });
});