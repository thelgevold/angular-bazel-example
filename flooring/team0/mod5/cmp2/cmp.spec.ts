
import { Cmp5052Component } from './cmp';
describe('Cmp5052Component', () => {
  it('should add', () => {
    expect(new Cmp5052Component().add5052(1)).toBe(5053);
  });
});