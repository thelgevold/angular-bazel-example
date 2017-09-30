
import { Cmp9545Component } from './cmp';
describe('Cmp9545Component', () => {
  it('should add', () => {
    expect(new Cmp9545Component().add9545(1)).toBe(9546);
  });
});