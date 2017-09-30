
import { Cmp7052Component } from './cmp';
describe('Cmp7052Component', () => {
  it('should add', () => {
    expect(new Cmp7052Component().add7052(1)).toBe(7053);
  });
});