
import { Cmp3125Component } from './cmp';
describe('Cmp3125Component', () => {
  it('should add', () => {
    expect(new Cmp3125Component().add3125(1)).toBe(3126);
  });
});