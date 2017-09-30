
import { Cmp6125Component } from './cmp';
describe('Cmp6125Component', () => {
  it('should add', () => {
    expect(new Cmp6125Component().add6125(1)).toBe(6126);
  });
});