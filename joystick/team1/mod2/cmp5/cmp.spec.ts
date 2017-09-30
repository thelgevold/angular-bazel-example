
import { Cmp9125Component } from './cmp';
describe('Cmp9125Component', () => {
  it('should add', () => {
    expect(new Cmp9125Component().add9125(1)).toBe(9126);
  });
});