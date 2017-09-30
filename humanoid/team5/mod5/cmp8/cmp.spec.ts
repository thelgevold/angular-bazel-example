
import { Cmp7558Component } from './cmp';
describe('Cmp7558Component', () => {
  it('should add', () => {
    expect(new Cmp7558Component().add7558(1)).toBe(7559);
  });
});