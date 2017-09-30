
import { Cmp7125Component } from './cmp';
describe('Cmp7125Component', () => {
  it('should add', () => {
    expect(new Cmp7125Component().add7125(1)).toBe(7126);
  });
});