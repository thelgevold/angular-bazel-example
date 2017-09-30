
import { Cmp9052Component } from './cmp';
describe('Cmp9052Component', () => {
  it('should add', () => {
    expect(new Cmp9052Component().add9052(1)).toBe(9053);
  });
});