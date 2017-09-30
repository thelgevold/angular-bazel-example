
import { Cmp5760Component } from './cmp';
describe('Cmp5760Component', () => {
  it('should add', () => {
    expect(new Cmp5760Component().add5760(1)).toBe(5761);
  });
});