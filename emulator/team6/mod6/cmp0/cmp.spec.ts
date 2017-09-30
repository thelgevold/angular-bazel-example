
import { Cmp4660Component } from './cmp';
describe('Cmp4660Component', () => {
  it('should add', () => {
    expect(new Cmp4660Component().add4660(1)).toBe(4661);
  });
});