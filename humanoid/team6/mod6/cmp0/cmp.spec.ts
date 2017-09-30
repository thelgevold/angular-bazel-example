
import { Cmp7660Component } from './cmp';
describe('Cmp7660Component', () => {
  it('should add', () => {
    expect(new Cmp7660Component().add7660(1)).toBe(7661);
  });
});