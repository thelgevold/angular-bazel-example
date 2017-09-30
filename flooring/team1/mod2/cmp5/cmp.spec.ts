
import { Cmp5125Component } from './cmp';
describe('Cmp5125Component', () => {
  it('should add', () => {
    expect(new Cmp5125Component().add5125(1)).toBe(5126);
  });
});