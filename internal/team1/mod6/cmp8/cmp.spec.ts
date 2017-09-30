
import { Cmp8168Component } from './cmp';
describe('Cmp8168Component', () => {
  it('should add', () => {
    expect(new Cmp8168Component().add8168(1)).toBe(8169);
  });
});