
import { Cmp9660Component } from './cmp';
describe('Cmp9660Component', () => {
  it('should add', () => {
    expect(new Cmp9660Component().add9660(1)).toBe(9661);
  });
});