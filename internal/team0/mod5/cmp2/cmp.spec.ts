
import { Cmp8052Component } from './cmp';
describe('Cmp8052Component', () => {
  it('should add', () => {
    expect(new Cmp8052Component().add8052(1)).toBe(8053);
  });
});