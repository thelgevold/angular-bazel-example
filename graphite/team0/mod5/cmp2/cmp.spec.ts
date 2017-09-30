
import { Cmp6052Component } from './cmp';
describe('Cmp6052Component', () => {
  it('should add', () => {
    expect(new Cmp6052Component().add6052(1)).toBe(6053);
  });
});