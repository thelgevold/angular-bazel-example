
import { Cmp1099Component } from './cmp';
describe('Cmp1099Component', () => {
  it('should add', () => {
    expect(new Cmp1099Component().add1099(1)).toBe(1100);
  });
});